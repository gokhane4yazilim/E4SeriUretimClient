import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBuyMilkComponent } from './add-buy-milk/add-buy-milk.component';
import { DetailBuyMilkComponent } from './detail-buy-milk/detail-buy-milk.component';
import { ListBuyMilkComponent } from './list-buy-milk/list-buy-milk.component';
import { PaymentBankComponent } from './payment-bank/payment-bank.component';
import { PaymentCashComponent } from './payment-cash/payment-cash.component';

const routes: Routes = [
  { path: '', component: ListBuyMilkComponent},
  { path: ':partnerId/add-buy-milk/:itemPriceGroupId', component: AddBuyMilkComponent},
  { path: 'payment-cash/:id', component: PaymentCashComponent},
  { path: 'payment-bank/:id', component: PaymentBankComponent},
  { path: 'detail-buy-milk/:id', component: DetailBuyMilkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyMilkRoutingModule { }
