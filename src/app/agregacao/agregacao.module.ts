import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregacaoRoutes } from './agregacao.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgregacaoComponent } from './agregacao.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AgregacaoComponent, HttpClientModule
  ],
  declarations: [AgregacaoComponent]
})
export class AgregacaoModule { }
