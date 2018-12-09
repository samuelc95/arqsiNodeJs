import { AcabamentoService } from './acabamento.service';
import { Iacabamento } from './../interfaces/acabamento';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-acabamento',
  templateUrl: './acabamento.component.html',
  styleUrls: ['./acabamento.component.css']
})
export class AcabamentoComponent implements OnInit {
  public acabamentos: Iacabamento[];
  public acabamento: Iacabamento;

  regForm = new FormGroup({
    nome: new FormControl(),
  });

  editForm = new FormGroup({
    nome: new FormControl()
  });
  constructor(private _acabamentoService: AcabamentoService) { }

  ngOnInit() {
    this.getAcabamentos();
  }

  private getAcabamentos(): void {
    this._acabamentoService.getAcabamentos().subscribe(data => {
    console.log(data);
    this.acabamentos = data;
    });
  }

  public getAcabamentoId(id: Number): void {
    this._acabamentoService.getAcabamentoId(id).subscribe(data => {
      console.log(data);
      this.acabamento = data;
    });
  }

  public addAcabamento(): void {
    console.log(this.regForm.controls['nome'].value);
    const acabamento = {} as Iacabamento;
    acabamento.nome = this.regForm.controls['nome'].value;
    this._acabamentoService.addAcabamento(acabamento).subscribe();
    this.regForm.reset();
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }

  public deleteAcabamento(id): void {
    this._acabamentoService.deleteAcabamento(id).subscribe();
  }

  public editAcabamento(idAcab : number){
    const acabamento = {} as Iacabamento;
    acabamento.nome = this.editForm.controls['nome'].value;
   
    console.log('material editado ' +JSON.stringify(acabamento));
    this._acabamentoService.updateAcabamento(acabamento, idAcab).subscribe();
    this.editForm.reset();
  }

}
