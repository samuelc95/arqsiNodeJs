import { Irestricao } from './../interfaces/restricao';
import { RestricaoService } from './restricao.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-restricao',
  templateUrl: './restricao.component.html',
  styleUrls: ['./restricao.component.css']
})
export class RestricaoComponent implements OnInit {
  public restricoes: Irestricao[];
  public restricao: Irestricao;
  regForm = new FormGroup({
    larguraMin: new FormControl(),
    larguraMax: new FormControl(),
    alturaMin: new FormControl(),
    alturaMax: new FormControl(),
    profundidadeMin: new FormControl(),
    profundidadeMax: new FormControl()
  });

  editForm = new FormGroup({
    larguraMin: new FormControl(),
    larguraMax: new FormControl(),
    alturaMin: new FormControl(),
    alturaMax: new FormControl(),
    profundidadeMin: new FormControl(),
    profundidadeMax: new FormControl()
  });

  constructor(private _restricaoService: RestricaoService) { }

  ngOnInit() {
    this.getRestricoes();
  }

  private getRestricoes(): void {
    this._restricaoService.getRestricoes().subscribe(data => {
    console.log(data);
    this.restricoes = data;
    });
  }

  public getRestricaoId(id: Number): void {
    this._restricaoService.getRestricaoId(id).subscribe(data => {
      console.log(data);
      this.restricao = data;
    });
  }

  public addRestricao(): void {
    console.log(this.regForm.controls['alturaMin'].value);
    const restricao = {} as Irestricao;
    restricao.heightMin = this.regForm.controls['alturaMin'].value;
    restricao.lenghtMin = this.regForm.controls['larguraMin'].value;
    restricao.depthMin = this.regForm.controls['profundidadeMin'].value;
    restricao.heightMax = this.regForm.controls['alturaMax'].value;
    restricao.lenghtMax = this.regForm.controls['larguraMax'].value;
    restricao.depthMax = this.regForm.controls['profundidadeMax'].value;
    this._restricaoService.addRestricao(restricao).subscribe();
    this.regForm.reset();
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }

  public deleteRestricao(id): void {
    this._restricaoService.deleteRestricao(id).subscribe();
  }

  public editRestricao(idRes : number){
    const restricao = {} as Irestricao;
    restricao.heightMin = this.editForm.controls['alturaMin'].value;
    restricao.lenghtMin = this.editForm.controls['larguraMin'].value;
    restricao.depthMin = this.editForm.controls['profundidadeMin'].value;
    restricao.heightMax = this.editForm.controls['alturaMax'].value;
    restricao.lenghtMax = this.editForm.controls['larguraMax'].value;
    restricao.depthMax = this.editForm.controls['profundidadeMax'].value;
   
    console.log('material editado ' +JSON.stringify(restricao));
    this._restricaoService.updateRestricao(restricao, idRes).subscribe();
    this.editForm.reset();
  }
}
