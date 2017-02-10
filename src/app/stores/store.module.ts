import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../routes/app-routing.module';
import { StoreListComponent } from './store-list.component';
import { StoreFilterPipe } from './store-filter.pipe';
import { StoreFieldFilterPipe } from './store-field-filter.pipe';
import { StoreOrderByFilterPipe } from './store-orderBy-filter.pipe';
import { StoreService } from './store.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StoreListComponent,
    StoreFilterPipe,
    StoreFieldFilterPipe,
    StoreOrderByFilterPipe
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    StoreService
  ]
})
export class StoreModule {}
