import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { BuyMilkRoutingModule } from './buy-milk-routing.module';
import { ListBuyMilkComponent } from './list-buy-milk/list-buy-milk.component';
import { AddBuyMilkComponent } from './add-buy-milk/add-buy-milk.component';
import { PaymentCashComponent } from './payment-cash/payment-cash.component';
import { PaymentBankComponent } from './payment-bank/payment-bank.component';
import { DetailBuyMilkComponent } from './detail-buy-milk/detail-buy-milk.component';


@NgModule({
  declarations: [ListBuyMilkComponent, AddBuyMilkComponent, PaymentCashComponent, PaymentBankComponent, DetailBuyMilkComponent],
  imports: [
    CommonModule,
    BuyMilkRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BsDatepickerModule.forRoot()
  ]
})
export class BuyMilkModule { }
