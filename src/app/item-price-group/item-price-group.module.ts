import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ItemPriceGroupRoutingModule } from './item-price-group-routing.module';
import { ListItemPriceGroupComponent } from './list-item-price-group/list-item-price-group.component';
import { AddItemPriceGroupComponent } from './add-item-price-group/add-item-price-group.component';
import { UpdateItemPriceGroupComponent } from './update-item-price-group/update-item-price-group.component';


@NgModule({
  declarations: [
    ListItemPriceGroupComponent,
    AddItemPriceGroupComponent,
    UpdateItemPriceGroupComponent
  ],
  imports: [
    CommonModule,
    ItemPriceGroupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class ItemPriceGroupModule { }
