import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitListModel } from 'src/models/unit/unitListModel';
import { ItemService } from 'src/services/item.service';
import { UnitService } from 'src/services/unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  id = this.actRouter.snapshot.params.id;
  units: UnitListModel[];
  updateForm: FormGroup;

  constructor(
    private readonly itemService: ItemService,
    private readonly unitService: UnitService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createUpdateForm();
    this.setUpdateForm();
    this.listUnit();
  }

  listUnit(){
    this.unitService.getAll().subscribe(data => {
      this.units = data;
    });
  }

  createUpdateForm(){
    this.updateForm = this.formBuilder.group({
      id: this.id,
      name: [''],
      code: [''],
      description: [''],
      vatRate: [''],
      unitId: ['']
    });
  }

  setUpdateForm(){
    this.itemService.getById(this.id).subscribe(data => {
      this.updateForm.setValue({
        id: data.id,
        name: data.name,
        code: data.code,
        description: data.description,
        vatRate: data.vatRate,
        unitId: data.unitId
      });
    });
  }

  submitForm(){
    this.itemService.update(this.id, this.updateForm.value).subscribe(data => {
      Swal.fire('Güncelleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/item');
      });
    });
  }

}
