import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitService } from 'src/services/unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-unit',
  templateUrl: './update-unit.component.html',
  styleUrls: ['./update-unit.component.css']
})
export class UpdateUnitComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  updateForm: FormGroup;

  constructor(
    private readonly unitService: UnitService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createUpdateForm();
    this.setUpdateForm();
  }

  createUpdateForm(){
    this.updateForm = this.formBuilder.group({
      id: [''],
      code: [''],
      name: [''],
      description: ['']
    });
  }

  setUpdateForm(){
    this.unitService.getById(this.id).subscribe(data => {
      this.updateForm.setValue({
        id: this.id,
        code: data.code,
        name: data.name,
        description: data.description
      });
    });
  }

  submitForm(){
    this.unitService.update(this.id, this.updateForm.value).subscribe(data => {
      Swal.fire('Güncelleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/unit');
      });
    });
  }

}
