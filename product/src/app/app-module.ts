import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Product } from './product/product';
import { ProductList } from './product-list/product-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Update } from './update/update';

@NgModule({
  declarations: [App, Product, ProductList, Update],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductList },
      { path: 'products', component: ProductList },
      { path: 'add-product', component: Product },
      { path: 'update/:id', component: Update }
    ]),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
