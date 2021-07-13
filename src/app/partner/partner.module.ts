import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { PartnerRoutingModule } from './partner-routing.module';
import { ListPartnerComponent } from './list-partner/list-partner.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { UpdatePartnerComponent } from './update-partner/update-partner.component';
import { ListPartnerLineComponent } from './list-partner-line/list-partner-line.component';
import { BuyMilkComponent } from './buy-milk/buy-milk.component';
import { SaleFoodComponent } from './sale-food/sale-food.component';
import { PaymentLineComponent } from './payment-line/payment-line.component';
import { PaymentCashComponent } from './payment-cash/payment-cash.component';
import { PaymentBankComponent } from './payment-bank/payment-bank.component';


@NgModule({
  declarations: [
    ListPartnerComponent, 
    AddPartnerComponent, 
    UpdatePartnerComponent, 
    ListPartnerLineComponent, 
    BuyMilkComponent, 
    SaleFoodComponent, 
    PaymentLineComponent, 
    PaymentCashComponent, 
    PaymentBankComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BsDatepickerModule.forRoot()
  ]
})
export class PartnerModule { }
