import { AcabamentoRoutes } from './acabamento.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcabamentoComponent } from './acabamento.component';
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
    AcabamentoRoutes,
    HttpClientModule
  ],
  declarations: [AcabamentoComponent]
})
export class AcabamentoModule { }
