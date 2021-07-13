import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemPriceGroupListModel } from 'src/models/item-price-group/itemPriceGroupListModel';
import { ItemListModel } from 'src/models/item/itemListModel';
import { PriceType } from 'src/models/priceType';
import { ItemService } from 'src/services/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item-price',
  templateUrl: './add-item-price.component.html',
  styleUrls: ['./add-item-price.component.css']
})
export class AddItemPriceComponent implements OnInit {

  id = this.actRouter.snapshot.params.id;
  item: ItemListModel;
  addForm: FormGroup;
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
    this.createForm();
    this.listItemPriceGroup();
    this.getItem();
    this.listPriceType();
  }

  createForm(){
    this.addForm = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      price: [''],
      priceTypeId: [''],
      itemId: this.id,
      itemPriceGroupId: ['']
    });
  }

  getItem(){
    this.itemService.getById(this.id).subscribe(data => {
      this.item = data;
    });
  }

  listPriceType(){
    this.itemService.getAllPriceType().subscribe(data => {
      this.priceTypes = data;
    });
  }

  listItemPriceGroup(){
    this.itemService.getAllItemPriceGroup().subscribe(data => {
      this.itemPriceGroups = data;
    });
  }

  submitForm(){
    this.itemService.addItemPrice(this.addForm.value).subscribe(data => {
      Swal.fire('Ekleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/item/list-item-price/' + this.id);
      });
    });
  }

}
