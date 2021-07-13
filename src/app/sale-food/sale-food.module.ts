import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { SaleFoodRoutingModule } from './sale-food-routing.module';
import { ListSaleFoodComponent } from './list-sale-food/list-sale-food.component';
import { AddSaleFoodComponent } from './add-sale-food/add-sale-food.component';
import { DetailSaleFoodComponent } from './detail-sale-food/detail-sale-food.component';


@NgModule({
  declarations: [ListSaleFoodComponent, AddSaleFoodComponent, DetailSaleFoodComponent],
  imports: [
    CommonModule,
    SaleFoodRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BsDatepickerModule.forRoot()
  ]
})
export class SaleFoodModule { }
