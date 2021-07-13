import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaListModel } from 'src/models/area/areaListModel';
import { AreaService } from 'src/services/area.service';
import { ItemPriceGroupService } from 'src/services/item-price-group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item-price-group',
  templateUrl: './add-item-price-group.component.html',
  styleUrls: ['./add-item-price-group.component.css']
})
export class AddItemPriceGroupComponent implements OnInit {

  addForm: FormGroup;
  areas: AreaListModel[];

  constructor(
    private readonly service: ItemPriceGroupService,
    private readonly areaService: AreaService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.createAddForm();
    this.listAreas();
  }

  listAreas(){
    this.areaService.getAll().subscribe(data => {
      this.areas = data;
    });
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      areaId: ['']
    });
  }

  submitForm(){
    this.service.add(this.addForm.value).subscribe(data => {
      Swal.fire('Ekleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/item-price-group');
      });
    });
  }

}
