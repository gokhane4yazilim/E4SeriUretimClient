import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVillageComponent } from './add-village/add-village.component';
import { ListVillageComponent } from './list-village/list-village.component';
import { UpdateVillageComponent } from './update-village/update-village.component';

const routes: Routes = [
  { path: '', component: ListVillageComponent},
  { path: 'add', component: AddVillageComponent},
  { path: 'update/:id', component: UpdateVillageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageRoutingModule { }
