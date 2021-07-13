import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAreaComponent } from './add-area/add-area.component';
import { ListAreaComponent } from './list-area/list-area.component';
import { UpdateAreaComponent } from './update-area/update-area.component';

const routes: Routes = [
  { path: '', component: ListAreaComponent},
  { path: 'add', component: AddAreaComponent},
  { path: 'update/:id', component: UpdateAreaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
