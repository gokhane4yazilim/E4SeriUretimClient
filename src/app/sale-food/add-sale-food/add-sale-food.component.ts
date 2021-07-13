import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemListModel } from 'src/models/item/itemListModel';
import { PartnerListModel } from 'src/models/partner/partnerListModel';
import { ItemService } from 'src/services/item.service';
import { PartnerService } from 'src/services/partner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-sale-food',
  templateUrl: './add-sale-food.component.html',
  styleUrls: ['./add-sale-food.component.css']
})
export class AddSaleFoodComponent implements OnInit {

  saleFoodForm: FormGroup;
  items: ItemListModel[];
  itemPriceId = this.actRoute.snapshot.params.itemPriceGroupId;
  partnerId = this.actRoute.snapshot.params.partnerId;
  partner: PartnerListModel;
  currentDate = new Date();

  constructor(
    private readonly itemService: ItemService,
    private readonly partnerService: PartnerService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createSaleFoodForm();
    this.listItems();
    this.getPartner();
  }

  createSaleFoodForm(){
    this.saleFoodForm = this.formBuilder.group({
      itemId: [''],
      creationDate: this.currentDate,
      amount: [''],
      price: [''],
      total: [''],
      lineType: [''],
      partnerId: this.partnerId,
      priceTypeId: 2
    });
  }

  getPartner() {
    this.partnerService.getById(this.partnerId).subscribe(data => {
      this.partner = data;
    });
  }

  getTotal() {
    return this.saleFoodForm.get('price').value * this.saleFoodForm.get('amount').value;
  }

  listItems(){
    this.itemService.getForSaleFood().subscribe(data => {
      this.items = data;
    });
  }

  onItemChange(itemId: number){
    this.itemService.getByItemPriceGroupId(itemId, this.itemPriceId).subscribe(data => {
      this.saleFoodForm.patchValue({
        price: data.price
      });
    });
  }

  onSubmit() {
    this.saleFoodForm.patchValue({
      total: this.getTotal(),
      lineType: 'Toptan Satış Faturası'
    });
    this.itemService.addItemLine(this.saleFoodForm.value).subscribe(() => { 
      Swal.fire('Kayıt Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/sale-food');
      });
    });

  }

}
