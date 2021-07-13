import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SaleFoodListModel } from 'src/models/line/saleFoodListModel';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-list-sale-food',
  templateUrl: './list-sale-food.component.html',
  styleUrls: ['./list-sale-food.component.css']
})
export class ListSaleFoodComponent implements OnInit {

  lines: SaleFoodListModel[];
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;
  dateForm: FormGroup;
  date = new Date();
  getFirstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  getLastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);

  constructor(
    private readonly itemService: ItemService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.listLines();
    this.createDateForm();
  }

  createDateForm() {
    this.dateForm = this.formBuilder.group({
      startDate: this.getFirstDay,
      lastDate: this.getLastDay
    });
  }

  onTableDataChange(event) {
    this.page = event;
    this.listLines();
  }

  listLines() {
    return this.itemService.getAllSaleFoodList().subscribe(response => {
      this.lines = response;
    });
  }

  onSubmit(){
    this.itemService.getAllSaleFoodListFilter(this.dateForm.value).subscribe(data => {
      this.lines = data;
    });
  }

}
