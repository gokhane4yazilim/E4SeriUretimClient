import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UnitService } from 'src/services/unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {

  addForm: FormGroup;

  constructor(
    private readonly unitService: UnitService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      code: [''],
      name: [''],
      description: ['']
    });
  }

  submitForm(){
    this.unitService.add(this.addForm.value).subscribe(data => {
      Swal.fire('Ekleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/unit');
      });
    });
  }

}
