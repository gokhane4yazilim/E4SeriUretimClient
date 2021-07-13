import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DivisionRoutingModule } from './division-routing.module';
import { ListDivisionComponent } from './list-division/list-division.component';
import { AddDivisionComponent } from './add-division/add-division.component';
import { UpdateDivisionComponent } from './update-division/update-division.component';


@NgModule({
  declarations: [ListDivisionComponent, AddDivisionComponent, UpdateDivisionComponent],
  imports: [
    CommonModule,
    DivisionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class DivisionModule { }
