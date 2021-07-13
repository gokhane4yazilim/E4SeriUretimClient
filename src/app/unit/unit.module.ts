import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule} from 'ng2-search-filter';

import { UnitRoutingModule } from './unit-routing.module';
import { ListUnitComponent } from './list-unit/list-unit.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { UpdateUnitComponent } from './update-unit/update-unit.component';


@NgModule({
  declarations: [ListUnitComponent, AddUnitComponent, UpdateUnitComponent],
  imports: [
    CommonModule,
    UnitRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class UnitModule { }
