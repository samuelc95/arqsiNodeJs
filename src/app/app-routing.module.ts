import { AgregacaoComponent } from './agregacao/agregacao.component';
import { AcabamentoComponent } from './acabamento/acabamento.component';
import { MaterialComponent } from './material/material.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { RestricaoComponent } from './restricao/restricao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { EncomendaComponent } from './encomenda/encomenda.component';
import {DimensaoComponent} from './dimensao/dimensao.component';
import { MaterialAcabamentoComponent } from './materialAcabamento/materialAcabamento.component';

const routes: Routes = [
  {path: 'produto', component: ProdutoComponent},
  {path: 'encomenda', component: EncomendaComponent},
  {path: 'dimensao', component: DimensaoComponent},
  {path: 'restricao', component: RestricaoComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'material', component: MaterialComponent},
  {path: 'acabamento', component: AcabamentoComponent},
  {path: 'agregacao', component: AgregacaoComponent},
  {path: 'materialAcabamento', component: MaterialAcabamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProdutoComponent, EncomendaComponent, DimensaoComponent, RestricaoComponent,
                                  MaterialComponent, CategoriaComponent, AcabamentoComponent, AgregacaoComponent,
                                  MaterialAcabamentoComponent];
