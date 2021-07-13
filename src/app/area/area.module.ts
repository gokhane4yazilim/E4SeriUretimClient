import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AreaRoutingModule } from './area-routing.module';
import { ListAreaComponent } from './list-area/list-area.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { UpdateAreaComponent } from './update-area/update-area.component';
import { AreaService } from 'src/services/area.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    ListAreaComponent,
    AddAreaComponent,
    UpdateAreaComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [AreaService]
})
export class AreaModule { }
