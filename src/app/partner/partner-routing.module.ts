import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { BuyMilkComponent } from './buy-milk/buy-milk.component';
import { ListPartnerLineComponent } from './list-partner-line/list-partner-line.component';
import { ListPartnerComponent } from './list-partner/list-partner.component';
import { PaymentBankComponent } from './payment-bank/payment-bank.component';
import { PaymentCashComponent } from './payment-cash/payment-cash.component';
import { PaymentLineComponent } from './payment-line/payment-line.component';
import { SaleFoodComponent } from './sale-food/sale-food.component';
import { UpdatePartnerComponent } from './update-partner/update-partner.component';

const routes: Routes = [
  { path: '', component: ListPartnerComponent},
  { path: 'add', component: AddPartnerComponent},
  { path: 'update/:id', component: UpdatePartnerComponent},
  { path: 'list-partner-line/:id', component: ListPartnerLineComponent},
  { path: ':partnerId/buy-milk/:itemPriceGroupId', component: BuyMilkComponent},
  { path: ':partnerId/sale-food/:itemPriceGroupId', component: SaleFoodComponent},
  { path: 'payment-line/:id', component: PaymentLineComponent},
  { path: 'payment-cash/:id', component: PaymentCashComponent},
  { path: 'payment-bank/:id', component: PaymentBankComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
