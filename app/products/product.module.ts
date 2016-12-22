import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { StoreFilterPipe } from './product-filter-store.pipe';
import { StoreFieldFilterPipe } from './product-filter-store-field.pipe';
import { StoreOrderByFilterPipe } from './product-filter-store-orderBy.pipe';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StoreFilterPipe,
        StoreFieldFilterPipe,
        StoreOrderByFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id',
              canActivate: [ ProductDetailGuard ],
              component: ProductDetailComponent },
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {}
