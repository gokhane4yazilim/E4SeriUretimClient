import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaListModel } from 'src/models/area/areaListModel';
import { AreaService } from 'src/services/area.service';
import { VillageService } from 'src/services/village.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-village',
  templateUrl: './add-village.component.html',
  styleUrls: ['./add-village.component.css']
})
export class AddVillageComponent implements OnInit {

  addForm: FormGroup;
  areas: AreaListModel[];

  constructor(
    private readonly villageService: VillageService,
    private readonly areaService: AreaService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.createAddForm();
    this.listArea();
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      areaId: ['']
    });
  }

  listArea(){
    this.areaService.getAll().subscribe(data => {
      this.areas = data;
    });
  }

  submitForm(){
    this.villageService.add(this.addForm.value).subscribe(data => {
      Swal.fire('Ekleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/village');
      });
    });
  }

}
