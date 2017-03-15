import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { AppRoutingModule } from '../routes/app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent} from './product-detail.component';
import { ProductDetailDialogComponent } from './product-detail-dialog.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';
import { ProductListMdCardDirective } from './product-list-md-card.directive';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductDetailDialogComponent,
    ProductFilterPipe,
    ProductListMdCardDirective
  ],
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ProductDetailDialogComponent
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})
export class ProductModule {}
