import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaService } from 'src/services/area.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {

  addForm: FormGroup;

  constructor(
    private readonly areaService: AreaService,
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
    this.areaService.add(this.addForm.value).subscribe(data => {
      Swal.fire('Ekleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/area');
      });
    });
  }

}
