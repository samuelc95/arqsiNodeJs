import { Component, OnInit } from '@angular/core';
import { MaterialAcabamentoService } from './materialAcabamento.service';
import { ImaterialAcabamento } from '../interfaces/materialAcabamento';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MaterialService } from '../material/material.service';
import { Imaterial } from '../interfaces/material';
import { AcabamentoService } from '../acabamento/acabamento.service';
import { Iacabamento } from '../interfaces/acabamento';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-material-acabamento',
  templateUrl: './materialAcabamento.component.html',
  styleUrls: ['./materialAcabamento.component.css']
})

export class MaterialAcabamentoComponent implements OnInit {

  private regForm = new FormGroup({
    materialId: new FormControl(),
    acabamentoId: new FormControl()
  });

  matsacabs: ImaterialAcabamento[];
  materiais: Imaterial[];
  public acabamentos: Iacabamento[];



  constructor(private _materialAcabamentoService: MaterialAcabamentoService,
    private _materialService: MaterialService,
    private _acabamentoService: AcabamentoService) { }

  ngOnInit() {
    this.fillData()
    .subscribe(result => {
      this.getMatsAcabs();
    });
    
  }

private fillData(): Observable<any>{
    this.getMateriais();
    this.getAcabamentos();
    return this._materialAcabamentoService.getMatsAcabs();
}
  private getMatsAcabs(): void {
    this._materialAcabamentoService.getMatsAcabs().subscribe(data => {
      console.log(data);
      this.matsacabs = data;
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

  public deleteMatAcab(materialAcabamentoId): void {
    this._materialAcabamentoService.deleteMatAcab(materialAcabamentoId).subscribe();
  }

  public addMatAcab(): void {

    const matAcab = {} as ImaterialAcabamento;
    matAcab.materialId = this.regForm.controls['materialId'].value;
    matAcab.acabamentoId = this.regForm.controls['acabamentoId'].value;

    this._materialAcabamentoService.addMatAcab(matAcab).subscribe();
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }

  getNomeMaterial(id: number): String {
    return this.materiais.find(x => x.materialId == id).nome;
  }

  getNomeAcabamento(id: number): String {
    return this.acabamentos.find(x => x.acabamentoId == id).nome;
  }
}