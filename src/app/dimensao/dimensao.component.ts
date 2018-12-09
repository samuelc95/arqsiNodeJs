import { Idimensao } from './../interfaces/dimensao';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { DimensaoService } from './dimensao.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dimensao',
  templateUrl: './dimensao.component.html',
  styleUrls: ['./dimensao.component.css']
})

export class DimensaoComponent implements OnInit {

  public dimensions: Idimensao[];
  public dimensao: Idimensao;

  private regForm = new FormGroup({
    profundidade: new FormControl(),
    largura: new FormControl(),
    altura: new FormControl()
  });

  private editForm = new FormGroup({
    profundidade: new FormControl(),
    largura: new FormControl(),
    altura: new FormControl()
  });



  constructor(private _dimensaoService: DimensaoService) { }

  async ngOnInit() {
    this.getDimensoes();
  }

  private getDimensoes(): void {
    this._dimensaoService.getDimensoes().subscribe(data => {
      console.log(data);
      this.dimensions = data;
    });
  }

  public getDimensaoId(id: Number): void {
    this._dimensaoService.getDimensaoId(id).subscribe(data => {
      console.log('iD----> ' +data);
      this.dimensao = data;
    });
  }

  public addDimensao(): void {
    console.log(this.regForm.controls['profundidade'].value);
    const dimensao = {} as Idimensao;
    dimensao.lenght = this.regForm.controls['largura'].value;
    dimensao.height = this.regForm.controls['altura'].value;
    dimensao.depth = this.regForm.controls['profundidade'].value;
    this._dimensaoService.addDimensao(dimensao).subscribe();
    this.regForm.reset();
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }


  public deleteDimensao(id): void {
    this._dimensaoService.deleteDimension(id).subscribe();
  }

  
  public editDimensao(idDim : number){
    const dimensao = {} as Idimensao;
    dimensao.lenght = this.editForm.controls['largura'].value;
    dimensao.height = this.editForm.controls['altura'].value;
    dimensao.depth = this.editForm.controls['profundidade'].value;
   
    console.log('material editado ' +JSON.stringify(dimensao));
    this._dimensaoService.updateDimensao(dimensao, idDim).subscribe();
    this.editForm.reset();
  }

}
