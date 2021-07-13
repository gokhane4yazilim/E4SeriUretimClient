import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWarehouseComponent } from './add-warehouse/add-warehouse.component';
import { ListWarehouseComponent } from './list-warehouse/list-warehouse.component';
import { UpdateWarehouseComponent } from './update-warehouse/update-warehouse.component';

const routes: Routes = [
  { path: '', component: ListWarehouseComponent},
  { path: 'add', component: AddWarehouseComponent},
  { path: 'update/:id', component: UpdateWarehouseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
