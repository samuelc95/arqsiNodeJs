import { Iproduto } from './../interfaces/produto';
import { ProdutoService } from './../produto/produto.service';
import { IAgregacao } from './../interfaces/agregacao';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { AgregacaoService } from './agregacao.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregacao',
  templateUrl: './agregacao.component.html',
  styleUrls: ['./agregacao.component.css']
})

export class AgregacaoComponent implements OnInit {

  agregacoes: IAgregacao[];
  public produtos: Iproduto[];
  public agregacao: IAgregacao;

  private regForm = new FormGroup({
    productId1: new FormControl(),
    productId2: new FormControl(),
    optional: new FormControl()
  });

  private editForm = new FormGroup({
    productId1: new FormControl(),
    productId2: new FormControl(),
    optional: new FormControl()
  });



  constructor(private _agregacaoService: AgregacaoService, private _produtoService: ProdutoService) { }

  ngOnInit() {
    this.fillData()
    .subscribe(result => {
      this.getAgregacoes();
    });
    
  }

private fillData(): Observable<any>{
    this.getProdutos();
    return this._produtoService.getProdutos();
}

  private getAgregacoes() {
    this._agregacaoService.getAgregacoes().subscribe(data => {
      console.log(data);
      this.agregacoes = data;
    });
  }

  getProdutos() {
    this._produtoService.getProdutos().subscribe(data => {
      console.log(data);
      this.produtos = data;
    });
  }

  getNome(id: number): String {
    return this.produtos.find(x => x.productId === id).nome;
  }

  public getAgregacaoId(id: Number): void {
    this._agregacaoService.getAgregacaoId(id).subscribe(data => {
      console.log('getIDF --> '+data);
      this.agregacao = data;
    });
  }

  public addAgregacao(): void {
    console.log(this.regForm.controls['productId1'].value);
    const agregacao = {} as IAgregacao;
    agregacao.productId1 = this.regForm.controls['productId1'].value;
    agregacao.productId2 = this.regForm.controls['productId2'].value;
    agregacao.optional = this.regForm.controls['optional'].value;
    this._agregacaoService.addAgregacao(agregacao).subscribe();
    this.regForm.reset();
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }


  public deleteAgregacao(id): void {
    this._agregacaoService.deleteAgregacao(id).subscribe();
  }

  public editAgregacao(idDim : number){
    const agregacao = {} as IAgregacao;
    agregacao.productId1 = this.editForm.controls['productId1'].value;
    agregacao.productId2 = this.editForm.controls['productId2'].value;
    agregacao.optional = this.editForm.controls['optional'].value;

    console.log('material editado ' +JSON.stringify(agregacao));
    this._agregacaoService.updateAgregacao(agregacao, idDim).subscribe();
    this.editForm.reset();
  }

}
