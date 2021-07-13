import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSaleFoodComponent } from './add-sale-food/add-sale-food.component';
import { DetailSaleFoodComponent } from './detail-sale-food/detail-sale-food.component';
import { ListSaleFoodComponent } from './list-sale-food/list-sale-food.component';

const routes: Routes = [
  { path: '', component: ListSaleFoodComponent},
  { path: ':partnerId/add-sale-food/:itemPriceGroupId', component: AddSaleFoodComponent},
  { path: 'detail-sale-food/:id', component: DetailSaleFoodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleFoodRoutingModule { }
