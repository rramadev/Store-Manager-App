import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../routes/app-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
      AppRoutingModule,
      SharedModule
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {}
