import { RestricaoRoutes } from './restricao.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestricaoComponent } from './restricao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RestricaoRoutes,
    HttpClientModule
  ],
  declarations: [RestricaoComponent]
})
export class RestricaoModule { }
