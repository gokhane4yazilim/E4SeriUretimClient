import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { VillageRoutingModule } from './village-routing.module';
import { ListVillageComponent } from './list-village/list-village.component';
import { AddVillageComponent } from './add-village/add-village.component';
import { UpdateVillageComponent } from './update-village/update-village.component';


@NgModule({
  declarations: [ListVillageComponent, AddVillageComponent, UpdateVillageComponent],
  imports: [
    CommonModule,
    VillageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class VillageModule { }
