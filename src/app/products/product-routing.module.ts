import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';

const productRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id',
      canActivate: [ ProductDetailGuard ],
      component: ProductDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
