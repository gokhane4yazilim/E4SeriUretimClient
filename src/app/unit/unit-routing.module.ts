import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { ListUnitComponent } from './list-unit/list-unit.component';
import { UpdateUnitComponent } from './update-unit/update-unit.component';

const routes: Routes = [
  { path: '', component: ListUnitComponent},
  { path: 'add', component: AddUnitComponent},
  { path: 'update/:id', component: UpdateUnitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitRoutingModule { }
