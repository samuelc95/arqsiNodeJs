import { MaterialAcabamentoService } from './materialAcabamento/materialAcabamento.service';
import { AgregacaoService } from './agregacao/agregacao.service';
import { AgregacaoComponent } from './agregacao/agregacao.component';
import { MaterialService } from './material/material.service';
import { ProdutoService } from './produto/produto.service';
import { AcabamentoComponent } from './acabamento/acabamento.component';

import { MaterialComponent } from './material/material.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Components */
import { AppComponent } from './app.component';
import { DimensaoComponent } from './dimensao/dimensao.component';
import { ProdutoComponent } from './produto/produto.component';

/** Services */
import { DimensaoService } from './dimensao/dimensao.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { RestricaoComponent } from './restricao/restricao.component';
import { CategoriaService } from './categoria/categoria.service';
import { RestricaoService } from './restricao/restricao.service';
import {AcabamentoService} from './acabamento/acabamento.service';
import { MaterialAcabamentoComponent } from './materialAcabamento/materialAcabamento.component';
@NgModule({
   declarations: [
      AppComponent,
      routingComponents,
      DimensaoComponent,
      ProdutoComponent,
      CategoriaComponent,
      RestricaoComponent,
      MaterialComponent,
      AcabamentoComponent,
      AgregacaoComponent,
      MaterialAcabamentoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      DimensaoService,
      CategoriaService,
      RestricaoService,
      ProdutoService,
      MaterialService,
      AcabamentoService,
      AgregacaoService,
      MaterialAcabamentoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
