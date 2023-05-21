import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductsComponent } from './components/products/products.component';
import { ButtonBackgroundDirective } from './directives/button-background.directive';
import { ProductPricePipe } from './pipes/product-price.pipe';
import {CommonModule, CurrencyPipe} from "@angular/common";
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { AdvantagesTextPipe } from './pipes/advantages-text.pipe';
import { EditedPhoneNumberPipe } from './pipes/edited-phone-number.pipe';
registerLocaleData(localeFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductsComponent,
    ButtonBackgroundDirective,
    ProductPricePipe,
    AdvantagesTextPipe,
    EditedPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
