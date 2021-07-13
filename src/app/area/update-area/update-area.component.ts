import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from 'src/services/area.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-area',
  templateUrl: './update-area.component.html',
  styleUrls: ['./update-area.component.css']
})
export class UpdateAreaComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  updateForm: FormGroup;

  constructor(
    private readonly areaService: AreaService,
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
    this.areaService.getById(this.id).subscribe(data => {
      this.updateForm.setValue({
        id: this.id,
        code: data.code,
        name: data.name,
        description: data.description
      });
    });
  }

  submitForm(){
    this.areaService.update(this.id, this.updateForm.value).subscribe(data => {
      Swal.fire('Güncelleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/area');
      });
    });
  }
}
