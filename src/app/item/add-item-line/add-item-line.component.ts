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
  selector: 'app-add-item-line',
  templateUrl: './add-item-line.component.html',
  styleUrls: ['./add-item-line.component.css']
})
export class AddItemLineComponent implements OnInit {

  id = this.actRouter.snapshot.params.id;
  item: ItemListModel;
  addForm: FormGroup;
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
    this.getItem();
    this.listItems();
    this.listPartners();
    this.listWarehouses();
    this.listUnits();
  }

  createForm(){
    this.addForm = this.formBuilder.group({
      amount: [''],
      addAmount: [''],
      mainAmount: [''],
      price: [''],
      vatRate: [''],
      discount: [''],
      lineType: [''],
      partnerId: [''],
      warehouseId: [''],
      unitId: [''],
      itemId: this.id,
      total: [''],
      totalVat: [''],
      totalNet: ['']
    });
  }

  getItem(){
    this.itemService.getById(this.id).subscribe(data => {
      this.item = data;
    });
  }

  getTotal(){
    return this.addForm.get('price').value * this.addForm.get('amount').value;
  }

  getTotalVat(){
    return (this.addForm.get('price').value * this.addForm.get('amount').value) * (this.addForm.get('vatRate').value / 100);
  }

  getTotalNet(){
    return (this.addForm.get('price').value * this.addForm.get('amount').value + (this.addForm.get('price').value * this.addForm.get('amount').value) * (this.addForm.get('vatRate').value / 100)) - ((this.addForm.get('price').value * this.addForm.get('amount').value + (this.addForm.get('price').value * this.addForm.get('amount').value) * (this.addForm.get('vatRate').value / 100)) * (this.addForm.get('discount').value / 100));
  }

  listItems(){
    this.itemService.getAll().subscribe(data => {
      this.items = data;
    });
  }

  listWarehouses(){
    this.warehouseService.getAll().subscribe(data => {
      this.warehouses = data;
    });
  }

  listPartners(){
    this.partnerService.getAll().subscribe(data => {
      this.partners = data;
    });
  }

  listUnits(){
    this.unitService.getAll().subscribe(data => {
      this.units = data;
    });
  }

  submitForm(){
    this.addForm.patchValue({
      total: this.getTotal(),
      totalVat: this.getTotalVat(),
      totalNet: this.getTotalNet()
    });
    this.itemService.addItemLine(this.addForm.value).subscribe(data => {
      Swal.fire('Ekleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/item/list-item-line/' + this.id);
      });
    });
  }

}
