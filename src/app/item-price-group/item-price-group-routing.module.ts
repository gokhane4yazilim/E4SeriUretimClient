import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemPriceGroupComponent } from './add-item-price-group/add-item-price-group.component';
import { ListItemPriceGroupComponent } from './list-item-price-group/list-item-price-group.component';
import { UpdateItemPriceGroupComponent } from './update-item-price-group/update-item-price-group.component';

const routes: Routes = [
  { path: '', component: ListItemPriceGroupComponent},
  { path: 'add', component: AddItemPriceGroupComponent},
  { path: 'update/:id', component: UpdateItemPriceGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemPriceGroupRoutingModule { }
