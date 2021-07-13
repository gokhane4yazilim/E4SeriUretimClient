import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UnitListModel } from 'src/models/unit/unitListModel';
import { ItemService } from 'src/services/item.service';
import { UnitService } from 'src/services/unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  addForm: FormGroup;
  units: UnitListModel[];

  constructor(
    private readonly itemService: ItemService,
    private readonly unitService: UnitService,
    private readonly formBuilder: FormBuilder,
    private readonly ngZone: NgZone,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.createAddForm();
    this.listUnit();
  }

  listUnit(){
    this.unitService.getAll().subscribe(data => {
      this.units = data;
    });
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      vatRate: [''],
      unitId: ['']
    });
  }

  submitForm(){
    this.itemService.add(this.addForm.value).subscribe(data => {
      Swal.fire('Ekleme Başarılı');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/item');
      });
    });
  }

}
