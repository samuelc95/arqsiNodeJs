import { Irestricao } from './../interfaces/restricao';
import { ImaterialAcabamento } from './../interfaces/materialAcabamento';
import { CategoriaService } from './../categoria/categoria.service';
import { ProdutoService } from './produto.service';
import { Iproduto } from './../interfaces/produto';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { DimensaoService } from '../dimensao/dimensao.service';
import { Icategoria } from '../interfaces/categoria';
import { Idimensao } from '../interfaces/dimensao';
import { MaterialAcabamentoService } from '../materialAcabamento/materialAcabamento.service';
import { Imaterial } from '../interfaces/material';
import { Iacabamento } from '../interfaces/acabamento';
import { MaterialService } from '../material/material.service';
import { AcabamentoService } from '../acabamento/acabamento.service';
import { RestricaoService } from '../restricao/restricao.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html' ,
  styles: []
})
export class ProdutoComponent implements OnInit {
  public produtos: Iproduto[];
  public produto: Iproduto;

  public categorias: Icategoria[];
  public dimensoes: Idimensao[];

  public materiaisAca: ImaterialAcabamento[];
  public materiais: Imaterial[];
  public acabamentos: Iacabamento[];

  public restricoes: Irestricao[];

  regForm = new FormGroup({
    nome: new FormControl(),
    descricao: new FormControl(),
    dimensaoId: new FormControl(),
    restricaoId: new FormControl(),
    categoriaId: new FormControl(),
    materialAcabId: new FormControl()
  });

  constructor(private _produtoService: ProdutoService, private _restricaoService: RestricaoService, private _categoriaService: CategoriaService, private _acabamentoService: AcabamentoService, private _materialService: MaterialService, private _materialAcabamentoService: MaterialAcabamentoService, private _dimensaoService: DimensaoService) { }

  ngOnInit() {
    this.fillData()
    .subscribe(result => {
      this.getProdutos();
    });
  }

  fillData() : Observable<any>{
    this.getMateriais();
    this.getAcabamentos();
    this.getCategorias();
    this.getDimensoes();
    this.getMatsAcabs(); 
    this.getRestricoes(); 

    return this._produtoService.getProdutos();
  }

  getProdutos() {
    this._produtoService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  private getMatsAcabs(): void {
    this._materialAcabamentoService.getMatsAcabs().subscribe(data => {
      this.materiaisAca = data;
      console.log(this.materiaisAca);
    });
  }

  private getMateriais(): void {
    this._materialService.getMateriais().subscribe(data => {
    console.log(data);
    this.materiais = data;
    });
  }

  private getAcabamentos(): void {
    this._acabamentoService.getAcabamentos().subscribe(data => {
    console.log(data);
    this.acabamentos = data;
    });
  }

  getCategorias() {
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  getDimensoes() {
    this._dimensaoService.getDimensoes().subscribe(data => {
      this.dimensoes = data;
    });
  }

  getRestricoes(){
    this._restricaoService.getRestricoes().subscribe(data => {
    console.log(data);
    this.restricoes = data;
    });
  }

  getCategoria(id: number): String {
    return this.categorias.find(x => x.categoryId === id).nome;
  }

  getDimensao(id: number): String {
    const temp = ['Prof.: ', this.dimensoes.find(x => x.dimensionId === id).depth,
                '; Largura: ', this.dimensoes.find(x => x.dimensionId === id).lenght,
                '; Altura: ', this.dimensoes.find(x => x.dimensionId === id).height];
    const result = temp.join(' ');
     return result;
  }

  public getProdutoId(id: Number): void {
    this._produtoService.getProdutoId(id).subscribe(data => {
      console.log(data);
      this.produto = data;
    });
  }

  public addProduto(): void {
    const produto = {} as Iproduto;
    produto.nome = this.regForm.controls['nome'].value;
    produto.descricao = this.regForm.controls['descricao'].value;
    produto.categoryId = this.regForm.controls['categoriaId'].value;
    produto.dimensionId = this.regForm.controls['dimensaoId'].value;
    produto.material_AcabamentoID = this.regForm.controls['materialAcabId'].value;
    produto.restrictionId = this.regForm.controls['restricaoId'].value;
    this._produtoService.addProduto(produto).subscribe();
    this.regForm.reset();
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }

  public deleteProduto(id): void {
    this._produtoService.deleteProduto(id).subscribe();
  }

  getMaterialNome(id: Number): String {
    return this.materiais.find(x => x.materialId === id).nome;
  }

  getAcabamentoNome(id: Number): String {
    return this.acabamentos.find(x => x.acabamentoId === id).nome;
  }

  getMatAcab(id: Number): String {
    console.log('entrou');
    let idMat = this.materiaisAca.find(x => x.material_AcabamentoID === id).materialId;
    let idAcab = this.materiaisAca.find(x => x.material_AcabamentoID === id).acabamentoId;
    const temp = ['Material: ', this.getMaterialNome(idMat) ,
                '; Acab.: ', this.getAcabamentoNome(idAcab)];
    const result = temp.join(' ');
     return result;
  }

}
