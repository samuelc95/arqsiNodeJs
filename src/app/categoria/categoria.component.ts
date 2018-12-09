import { Icategoria } from './../interfaces/categoria';
import { CategoriaService } from './categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  public categorias: Icategoria[];
  public categoria: Icategoria;

  private regForm = new FormGroup({
    nome: new FormControl()
  });

  editForm = new FormGroup({
    nome: new FormControl()
  });

  constructor(private _categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
  }

  private getCategorias(): void {
    this._categoriaService.getCategorias().subscribe(data => {
    console.log(data);
    this.categorias = data;
  });
}

public getCategoriaId(id: Number): void {
  this._categoriaService.getCategoriaId(id).subscribe(data => {
    console.log(data);
    this.categoria = data;
  });
}

public addCategoria(): void {
  console.log(this.regForm.controls['nome'].value);
  const categoria = {} as Icategoria;
  categoria.nome = this.regForm.controls['nome'].value;
  this._categoriaService.addCategoria(categoria).subscribe();
  this.regForm.reset();
  /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
}


public deleteCategoria(id): void {
  this._categoriaService.deleteCategoria(id).subscribe();
}


public editCategoria(idMat : number){
  const categoria = {} as Icategoria;
  categoria.nome = this.editForm.controls['nome'].value;
 
  console.log('material editado ' +JSON.stringify(categoria));
  this._categoriaService.updateCategoria(categoria, idMat).subscribe();
  this.editForm.reset();
}

}
