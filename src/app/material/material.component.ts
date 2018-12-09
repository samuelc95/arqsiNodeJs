import { Irestricao } from './../interfaces/restricao';
import { MaterialService } from './material.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Imaterial } from '../interfaces/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  public materiais: Imaterial[];
  public material: Imaterial;
  regForm = new FormGroup({
    nome: new FormControl(),
  });

  editForm = new FormGroup({
    nome: new FormControl()
  });
  constructor(private _materialService: MaterialService) { }

  ngOnInit() {
    this.getMateriais();
  }

  private getMateriais(): void {
    this._materialService.getMateriais().subscribe(data => {
    console.log(data);
    this.materiais = data;
    });
  }

  public getMaterialId(id: Number): void {
    this._materialService.getMaterialId(id).subscribe(data => {
      console.log(data);
      this.material = data;
    });
    //this.editForm.controls['nome'].patchValue(material.nome); 
  }

  public addMaterial(): void {
    console.log(this.regForm.controls['nome'].value);
    const material = {} as Imaterial;
    material.nome = this.regForm.controls['nome'].value;
    this._materialService.addMaterial(material).subscribe();
    this.regForm.reset();
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }

  public deleteMaterial(id): void {
    this._materialService.deleteMaterial(id).subscribe();
  }

  public editMaterial(idMat : number){
    const material = {} as Imaterial;
    material.nome = this.editForm.controls['nome'].value;
   
    console.log('material editado ' +JSON.stringify(material));
    this._materialService.updateMaterial(material, idMat).subscribe();
    this.editForm.reset();
  }

}
