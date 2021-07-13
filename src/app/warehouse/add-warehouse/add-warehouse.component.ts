import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DivisionListDto } from 'src/models/division/divisionListDto';
import { DivisionService } from 'src/services/division.service';
import { WarehouseService } from 'src/services/warehouse.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

  addForm: FormGroup;
  divisions: DivisionListDto[];

  constructor(
    private readonly warehouseService: WarehouseService,
    private readonly divisionService: DivisionService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.createAddForm();
    this.listDivision();
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      divisionId: ['']
    });
  }

  listDivision(){
    this.divisionService.getAll().subscribe(data => {
      this.divisions = data;
    });
  }

  submitForm(){
    this.warehouseService.add(this.addForm.value).subscribe(data => {
      Swal.fire('Ekleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/warehouse');
      });
    });
  }

}
