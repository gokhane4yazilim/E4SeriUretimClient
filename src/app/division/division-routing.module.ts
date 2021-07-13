import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDivisionComponent } from './add-division/add-division.component';
import { ListDivisionComponent } from './list-division/list-division.component';
import { UpdateDivisionComponent } from './update-division/update-division.component';

const routes: Routes = [
  { path: '', component : ListDivisionComponent},
  { path: 'add', component: AddDivisionComponent},
  { path: 'update/:id', component: UpdateDivisionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
