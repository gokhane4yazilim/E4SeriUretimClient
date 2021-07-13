import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaListModel } from 'src/models/area/areaListModel';
import { AreaService } from 'src/services/area.service';
import { VillageService } from 'src/services/village.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-village',
  templateUrl: './update-village.component.html',
  styleUrls: ['./update-village.component.css']
})
export class UpdateVillageComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  updateForm: FormGroup;
  areas: AreaListModel[];

  constructor(
    private readonly villageService: VillageService,
    private readonly areaService: AreaService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createUpdateForm();
    this.setUpdateForm();
    this.listArea();
  }

  createUpdateForm(){
    this.updateForm = this.formBuilder.group({
      id: this.id,
      code: [''],
      name: [''],
      description: [''],
      areaId: ['']
    });
  }

  setUpdateForm(){
    this.villageService.getById(this.id).subscribe(data => {
      this.updateForm.setValue({
        id: this.id,
        code: data.code,
        name: data.name,
        description: data.description,
        areaId: data.areaId
      });
    });
  }

  listArea(){
    this.areaService.getAll().subscribe(data => {
      this.areas = data;
    });
  }

  submitForm(){
    this.villageService.update(this.id, this.updateForm.value).subscribe(data => {
      Swal.fire('Güncelleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/village');
      });
    });
  }

}
