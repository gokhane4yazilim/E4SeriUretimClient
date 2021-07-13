import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuyMilkListModel } from 'src/models/line/buyMilkListModel';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-list-buy-milk',
  templateUrl: './list-buy-milk.component.html',
  styleUrls: ['./list-buy-milk.component.css']
})
export class ListBuyMilkComponent implements OnInit {
  lines: BuyMilkListModel[];
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

  onTableDataChange(event) {
    this.page = event;
    this.listLines();
  }

  createDateForm() {
    this.dateForm = this.formBuilder.group({
      startDate: this.getFirstDay,
      lastDate: this.getLastDay
    });
  }

  listLines() {
    return this.itemService.getAllBuyMilkList().subscribe(response => {
      this.lines = response;
    });
  }

  onSubmit(){
    this.itemService.getAllBuyMilkListFilter(this.dateForm.value).subscribe(data => {
      this.lines = data;
    });
  }

}
