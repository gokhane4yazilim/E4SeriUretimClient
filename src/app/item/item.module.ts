import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ItemRoutingModule } from './item-routing.module';
import { ListItemComponent } from './list-item/list-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemService } from 'src/services/item.service';
import { ListItemPriceComponent } from './list-item-price/list-item-price.component';
import { AddItemPriceComponent } from './add-item-price/add-item-price.component';
import { UpdateItemPriceComponent } from './update-item-price/update-item-price.component';
import { ListItemLineComponent } from './list-item-line/list-item-line.component';
import { AddItemLineComponent } from './add-item-line/add-item-line.component';
import { UpdateItemLineComponent } from './update-item-line/update-item-line.component';


@NgModule({
  declarations: [
    ListItemComponent,
    AddItemComponent,
    UpdateItemComponent,
    ListItemPriceComponent,
    AddItemPriceComponent,
    UpdateItemPriceComponent,
    ListItemLineComponent,
    AddItemLineComponent,
    UpdateItemLineComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [ItemService]
})
export class ItemModule { }
