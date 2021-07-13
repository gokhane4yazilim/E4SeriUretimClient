import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemPriceGroupListModel } from 'src/models/item-price-group/itemPriceGroupListModel';
import { ItemListModel } from 'src/models/item/itemListModel';
import { PriceType } from 'src/models/priceType';
import { ItemService } from 'src/services/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-item-price',
  templateUrl: './update-item-price.component.html',
  styleUrls: ['./update-item-price.component.css']
})
export class UpdateItemPriceComponent implements OnInit {

  id = this.actRouter.snapshot.params.id;
  itemId = this.actRouter.snapshot.params.itemId;
  updateForm: FormGroup;
  items: ItemListModel[];
  itemPriceGroups: ItemPriceGroupListModel[];
  priceTypes: PriceType[];

  constructor(
    private readonly itemService: ItemService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listItem();
    this.listItemPriceGroup();
    this.createUpdateForm();
    this.setUpdateForm();
  }

  createUpdateForm(){
    this.updateForm = this.formBuilder.group({
      id: this.id,
      name: [''],
      code: [''],
      description: [''],
      price: [''],
      priceTypeId: [''],
      itemId: this.itemId,
      itemPriceGroupId: ['']
    });
  }

  setUpdateForm(){
    this.itemService.getItemPriceById(this.id).subscribe(data => {
      this.updateForm.setValue({
        id: data.id,
        name: data.name,
        code: data.code,
        description: data.description,
        price: data.price,
        priceTypeId: data.priceTypeId,
        itemId: this.itemId,
        itemPriceGroupId: data.itemPriceGroupId
      });
    });
  }

  listPriceType(){
    this.itemService.getAllPriceType().subscribe(data => {
      this.priceTypes = data;
    });
  }

  listItem(){
    this.itemService.getAll().subscribe(data => {
      this.items = data;
    });
  }

  listItemPriceGroup(){
    this.itemService.getAllItemPriceGroup().subscribe(data => {
      this.itemPriceGroups = data;
    });
  }

  submitForm(){
    this.itemService.updateItemPrice(this.id, this.updateForm.value).subscribe(data => {
      Swal.fire('Güncelleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/item/list-item-price/' + this.itemId);
      });
    });
  }


}
