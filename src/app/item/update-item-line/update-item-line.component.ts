import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemListModel } from 'src/models/item/itemListModel';
import { PartnerListModel } from 'src/models/partner/partnerListModel';
import { UnitListModel } from 'src/models/unit/unitListModel';
import { WarehouseListDto } from 'src/models/warehouse/warehouseListDto';
import { ItemService } from 'src/services/item.service';
import { PartnerService } from 'src/services/partner.service';
import { UnitService } from 'src/services/unit.service';
import { WarehouseService } from 'src/services/warehouse.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-item-line',
  templateUrl: './update-item-line.component.html',
  styleUrls: ['./update-item-line.component.css']
})
export class UpdateItemLineComponent implements OnInit {

  id = this.actRouter.snapshot.params.id;
  itemId = this.actRouter.snapshot.params.itemId;
  item: ItemListModel;
  updateForm: FormGroup;
  items: ItemListModel[];
  warehouses: WarehouseListDto[];
  partners: PartnerListModel[];
  units: UnitListModel[];

  constructor(
    private readonly itemService: ItemService,
    private readonly warehouseService: WarehouseService,
    private readonly partnerService: PartnerService,
    private readonly unitService: UnitService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.setUpdateForm();
    this.getItem();
    this.listItems();
    this.listPartners();
    this.listWarehouses();
    this.listUnits();
  }

  createForm() {
    this.updateForm = this.formBuilder.group({
      id: this.id,
      amount: [''],
      addAmount: [''],
      price: [''],
      vatRate: [''],
      totalVat: [''],
      discount: [''],
      mainAmount: [''],
      lineType: [''],
      itemId: this.itemId,
      partnerId: [''],
      warehouseId: [''],
      unitId: ['']
    });
  }

  setUpdateForm() {
    this.itemService.getItemLineById(this.id).subscribe(data => {
      this.updateForm.setValue({
        id: this.id,
        amount: data.amount,
        addAmount: data.addAmount,
        price: data.price,
        vatRate: data.vatRate,
        totalVat: data.totalVat,
        discount: data.discount,
        mainAmount: data.mainAmount,
        lineType: data.lineType,
        itemId: this.itemId,
        partnerId: data.partnerId,
        warehouseId: data.warehouseId,
        unitId: data.unitId
      });
    });
  }

  getItem() {
    this.itemService.getById(this.id).subscribe(data => {
      this.item = data;
    });
  }

  listItems() {
    this.itemService.getAll().subscribe(data => {
      this.items = data;
    });
  }

  listWarehouses() {
    this.warehouseService.getAll().subscribe(data => {
      this.warehouses = data;
    });
  }

  listPartners() {
    this.partnerService.getAll().subscribe(data => {
      this.partners = data;
    });
  }

  listUnits() {
    this.unitService.getAll().subscribe(data => {
      this.units = data;
    });
  }

  submitForm() {
    this.itemService.updateItemLine(this.id, this.updateForm.value).subscribe(data => {
      Swal.fire('Güncelleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/item/list-item-line/' + this.itemId);
      });
    });
  }

}
