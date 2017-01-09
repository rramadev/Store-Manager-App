import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from '../home/welcome.component';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailComponent } from '../products/product-detail.component';
import { ProductDetailGuard } from '../products/product-guard.service';
import { StoreListComponent } from '../stores/store-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductDetailGuard ],
        component: ProductDetailComponent },
      { path: 'stores', component: StoreListComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])],
    // { useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule {}
