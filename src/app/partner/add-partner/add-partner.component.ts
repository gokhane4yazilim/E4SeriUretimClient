import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaListModel } from 'src/models/area/areaListModel';
import { ItemPriceGroupListModel } from 'src/models/item-price-group/itemPriceGroupListModel';
import { VillageListModel } from 'src/models/village/villageListModel';
import { AreaService } from 'src/services/area.service';
import { ItemPriceGroupService } from 'src/services/item-price-group.service';
import { PartnerService } from 'src/services/partner.service';
import { VillageService } from 'src/services/village.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.css']
})
export class AddPartnerComponent implements OnInit {

  addForm: FormGroup;
  villages: VillageListModel[];
  areas: AreaListModel[];
  itemPriceGroup = new ItemPriceGroupListModel;

  constructor(
    private readonly partnerService: PartnerService,
    private readonly villageService: VillageService,
    private readonly areaService: AreaService,
    private readonly iPGService: ItemPriceGroupService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.createCariForm();
    this.listArea();
    this.listVillage();
  }

  createCariForm(){
    this.addForm = this.formBuilder.group({
      name: [''],
      code: [''],
      description: [''],
      itemPriceGroupId: [],
      areaId: [''],
      villageId: this.villages,
      bagkur: [''],
      borsa: [''],
      address1: [''],
      address2: [''],
      phoneNumber1: [''],
      phoneNumber2: [''],
      iban: [''],
      tckNo: [''],
      taxNo: [''],
      taxOffice: ['']
    });
  }

  listVillage(){
    this.villageService.getAll().subscribe(data => {
      this.villages = data;
    });
  }

  listArea(){
    this.areaService.getAll().subscribe(data => {
      this.areas = data;
    });
  }

  onAreaChange(event){
    this.villageService.getAllByAreaId(event).subscribe(data => {
      this.villages = data;
    });
    this.iPGService.getByAreaId(event).subscribe(data => {
      this.itemPriceGroup = data;
    });
  }

  submitForm(){
    this.addForm.patchValue({
      itemPriceGroupId: this.itemPriceGroup.id
    });
    this.partnerService.add(this.addForm.value).subscribe(() => {
      Swal.fire('Ekleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/partner');
      });
    });
  }

}
