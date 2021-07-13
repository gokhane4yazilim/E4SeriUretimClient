import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import(`./account/account.module`).then(module => module.AccountModule)},
  { path: '', canActivate: [AuthGuard], component: HomeComponent},
  { path: 'partner', canActivate: [AuthGuard], loadChildren: () => import(`./partner/partner.module`).then(module => module.PartnerModule)},
  { path: 'item', canActivate: [AuthGuard], loadChildren: () => import(`./item/item.module`).then(module => module.ItemModule)},
  { path: 'area', canActivate: [AuthGuard], loadChildren: () => import(`./area/area.module`).then(module => module.AreaModule)},
  { path: 'village', canActivate: [AuthGuard], loadChildren: () => import(`./village/village.module`).then(module => module.VillageModule)},
  { path: 'item-price-group', canActivate: [AuthGuard], loadChildren: () => import(`./item-price-group/item-price-group.module`).then(module => module.ItemPriceGroupModule)},
  { path: 'unit', canActivate: [AuthGuard], loadChildren: () => import(`./unit/unit.module`).then(module => module.UnitModule)},
  { path: 'division', canActivate: [AuthGuard], loadChildren: () => import(`./division/division.module`).then(module => module.DivisionModule)},
  { path: 'warehouse', canActivate: [AuthGuard], loadChildren: () => import(`./warehouse/warehouse.module`).then(module => module.WarehouseModule)},
  { path: 'buy-milk', canActivate: [AuthGuard], loadChildren: () => import(`./buy-milk/buy-milk.module`).then(module=>module.BuyMilkModule)},
  { path: 'sale-food', canActivate: [AuthGuard], loadChildren: () => import(`./sale-food/sale-food.module`).then(module=>module.SaleFoodModule)},
  { path: 'payment', canActivate: [AuthGuard], loadChildren: () => import(`./payment/payment.module`).then(module=>module.PaymentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
