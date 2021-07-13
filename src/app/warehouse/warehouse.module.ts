import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { ListWarehouseComponent } from './list-warehouse/list-warehouse.component';
import { AddWarehouseComponent } from './add-warehouse/add-warehouse.component';
import { UpdateWarehouseComponent } from './update-warehouse/update-warehouse.component';


@NgModule({
  declarations: [ListWarehouseComponent, AddWarehouseComponent, UpdateWarehouseComponent],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class WarehouseModule { }
