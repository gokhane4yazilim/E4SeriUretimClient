import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemListModel } from 'src/models/item/itemListModel';
import { PartnerListModel } from 'src/models/partner/partnerListModel';
import { PartnerUpdateModel } from 'src/models/partner/partnerUpdateModel';
import { ItemService } from 'src/services/item.service';
import { PartnerService } from 'src/services/partner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buy-milk',
  templateUrl: './buy-milk.component.html',
  styleUrls: ['./buy-milk.component.css']
})
export class BuyMilkComponent implements OnInit {
  buyMilkForm: FormGroup;
  items: ItemListModel[];
  item: ItemListModel;
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
    this.createBuyMilkForm();
    this.listItems();
    this.getPartner();
  }

  createBuyMilkForm() {
    this.buyMilkForm = this.formBuilder.group({
      itemId: [''],
      creationDate: this.currentDate,
      amount: [''],
      price: [''],
      total: [''],
      lineType: [''],
      partnerId: this.partnerId,
      priceTypeId: 1
    });
  }

  getPartner() {
    this.partnerService.getById(this.partnerId).subscribe(data => {
      this.partner = data;
    });
  }
  
  getTotal() {
    return this.buyMilkForm.get('price').value * this.buyMilkForm.get('amount').value;
  }

  listItems() {
    this.itemService.getForBuyMilk().subscribe(data => {
      this.items = data;
    });
  }

  onItemChange(itemId: number) {
    this.itemService.getByItemPriceGroupId(itemId, this.itemPriceId).subscribe(data => {
      this.buyMilkForm.patchValue({
        price: data.price
      });
    });

    this.itemService.getById(itemId).subscribe(data => {
      this.item = data;
    });
  }

  onSubmit() {
    this.buyMilkForm.patchValue({
      total: this.getTotal(),
      lineType: 'Müstahsil Makbuzu'
    });
    this.itemService.addItemLine(this.buyMilkForm.value).subscribe(() => { 
      Swal.fire('Kayıt Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/partner');
      });
    });

  }
}
