import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DivisionListDto } from 'src/models/division/divisionListDto';
import { DivisionService } from 'src/services/division.service';
import { WarehouseService } from 'src/services/warehouse.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-warehouse',
  templateUrl: './update-warehouse.component.html',
  styleUrls: ['./update-warehouse.component.css']
})
export class UpdateWarehouseComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  updateForm: FormGroup;
  divisions: DivisionListDto[];

  constructor(
    private readonly warehouseService: WarehouseService,
    private readonly divisionService: DivisionService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createUpdateForm();
    this.setUpdateForm();
    this.listDivision();
  }

  createUpdateForm(){
    this.updateForm = this.formBuilder.group({
      id: this.id,
      code: [''],
      name: [''],
      description: [''],
      divisiınId: ['']
    });
  }

  setUpdateForm(){
    this.warehouseService.getById(this.id).subscribe(data => {
      this.updateForm.setValue({
        id: this.id,
        code: data.code,
        name: data.name,
        description: data.description,
        divisionId: data.divisionId
      });
    });
  }

  listDivision(){
    this.divisionService.getAll().subscribe(data => {
      this.divisions = data;
    });
  }

  submitForm(){
    this.warehouseService.update(this.id, this.updateForm.value).subscribe(data => {
      Swal.fire('Güncelleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/warehouse');
      });
    });
  }

}
