import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { EncomendaComponent } from './encomenda.component';


const appRoutes: Routes = [
  { path: 'encomenda', redirectTo: '/encomenda', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    EncomendaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class EncomendaRoutingModule { }


