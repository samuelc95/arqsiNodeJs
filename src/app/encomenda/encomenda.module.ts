import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { EncomendaRoutingModule } from './encomenda-routing.module';
import { EncomendaComponent } from './encomenda.component';


@NgModule({
  declarations: [
    EncomendaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    EncomendaRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [EncomendaComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
