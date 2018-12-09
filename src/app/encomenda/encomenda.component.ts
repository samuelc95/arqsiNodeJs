import { EncomendaService } from './encomenda.service';
import { Iencomenda } from './../interfaces/encomenda';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-encomenda',
  templateUrl: './encomenda.component.html',
  styles: []
})
export class EncomendaComponent implements OnInit {
  public encomendas: Iencomenda[];
  public encomenda: Iencomenda;

  constructor(private _encomendaService: EncomendaService) { }

  ngOnInit() {
    this.getEncomendas();
    console.log(this.encomendas);
  }

  private getEncomendas(): void {
    this._encomendaService.getEncomendas().subscribe(data => {
    console.log(data);
    this.encomendas = data;
    });
  }

  public getEncomendasId(id: String): void {
    this._encomendaService.getEncomendaId(id).subscribe(data => {
      console.log(data);
      this.encomenda = data;
    });
  }

  /** public addMaterial(): void {
    console.log(this.regForm.controls['nome'].value);
    const material = {} as Imaterial;
    material.nome = this.regForm.controls['nome'].value;
    this._materialService.addMaterial(material).subscribe();
    this.regForm.reset();
  }*/

  public deleteEncomenda(id: String): void {
    this._encomendaService.deleteEncomenda(id).subscribe();
  }

}
