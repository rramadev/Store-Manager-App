import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { StoreModule } from './stores/store.module';
import { AppRoutingModule } from './routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ProductModule,
    StoreModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
