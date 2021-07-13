import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaListModel } from 'src/models/area/areaListModel';
import { ItemPriceGroupListModel } from 'src/models/item-price-group/itemPriceGroupListModel';
import { VillageListModel } from 'src/models/village/villageListModel';
import { AreaService } from 'src/services/area.service';
import { ItemPriceGroupService } from 'src/services/item-price-group.service';
import { PartnerService } from 'src/services/partner.service';
import { VillageService } from 'src/services/village.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-partner',
  templateUrl: './update-partner.component.html',
  styleUrls: ['./update-partner.component.css']
})
export class UpdatePartnerComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  updateForm: FormGroup;
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
    private readonly router: Router,
    private readonly actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createPartnerForm();
    this.setPartnerForm();
    this.listArea();
    this.listVillage();
  }

  createPartnerForm() {
    this.updateForm = this.formBuilder.group({
      id: this.id,
      name: [''],
      code: [''],
      description: [''],
      itemPriceGroupId: [''],
      areaId: [''],
      villageId: [''],
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

  setPartnerForm() {
    this.partnerService.getById(this.id).subscribe(data => {
      this.itemPriceGroup.id = data.itemPriceGroupId;
      this.updateForm.setValue({
        id: this.id,
        name: data.name,
        code: data.code,
        description: data.description,
        itemPriceGroupId: data.itemPriceGroupId,
        areaId: data.areaId,
        villageId: data.villageId,
        bagkur: data.bagkur,
        borsa: data.borsa,
        address1: data.address1,
        address2: data.address2,
        phoneNumber1: data.phoneNumber1,
        phoneNumber2: data.phoneNumber2,
        iban: data.iban,
        tckNo: data.tckNo,
        taxNo: data.taxNo,
        taxOffice: data.taxOffice
      });
    });
  }

  listVillage() {
    this.villageService.getAll().subscribe(data => {
      this.villages = data;
    });
  }

  listArea() {
    this.areaService.getAll().subscribe(data => {
      this.areas = data;
    });
  }

  onAreaChange(event) {
    this.villageService.getAllByAreaId(event).subscribe(data => {
      this.villages = data;
    });

    this.iPGService.getByAreaId(event).subscribe(data => {
      this.itemPriceGroup = data;
    });

  }

  submitForm() {
    this.updateForm.patchValue({
      itemPriceGroupId: this.itemPriceGroup.id
    });
    this.partnerService.update(this.id, this.updateForm.value).subscribe(() => {
      Swal.fire('Güncelleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('partner');
      });
    });
  }

}
