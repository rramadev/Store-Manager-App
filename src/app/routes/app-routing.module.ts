import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from '../home/welcome.component';
// import { ProductListComponent } from '../products/product-list.component';
// import { ProductDetailComponent } from '../products/product-detail.component';
// import { ProductDetailGuard } from '../products/product-guard.service';
import { StoreListComponent } from '../stores/store-list.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'stores', component: StoreListComponent },
  // { path: 'products', component: ProductListComponent },
  // { path: 'product/:id',
  //     canActivate: [ ProductDetailGuard ],
  //     component: ProductDetailComponent },
  // Default
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // Wildcard
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  // , { useHash: true })]
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
