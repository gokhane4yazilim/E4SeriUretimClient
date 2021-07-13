import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemLineComponent } from './add-item-line/add-item-line.component';
import { AddItemPriceComponent } from './add-item-price/add-item-price.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListItemLineComponent } from './list-item-line/list-item-line.component';
import { ListItemPriceComponent } from './list-item-price/list-item-price.component';
import { ListItemComponent } from './list-item/list-item.component';
import { UpdateItemLineComponent } from './update-item-line/update-item-line.component';
import { UpdateItemPriceComponent } from './update-item-price/update-item-price.component';
import { UpdateItemComponent } from './update-item/update-item.component';

const routes: Routes = [
  { path: '', component: ListItemComponent},
  { path: 'add', component: AddItemComponent},
  { path: 'update/:id', component: UpdateItemComponent},
  { path: 'list-item-price/:id', component: ListItemPriceComponent},
  { path: 'add-item-price/:id', component: AddItemPriceComponent},
  { path: ':itemId/update-item-price/:id', component: UpdateItemPriceComponent},
  { path: 'list-item-line/:id', component: ListItemLineComponent},
  { path: 'add-item-line/:id', component: AddItemLineComponent},
  { path: ':itemId/update-item-line/:id', component: UpdateItemLineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
