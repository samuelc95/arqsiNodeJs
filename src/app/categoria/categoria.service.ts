import { Icategoria } from './../interfaces/categoria';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  [x: string]: any;
  private WebApiIt1url = 'http://arqsi-1151111-1151112.azurewebsites.net/api/category';
  constructor(private http: HttpClient) { }


  getCategorias(): Observable<any> {
    return this.http.get(this.WebApiIt1url).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    return res || {};
  }

  getCategoriaId(id: Number): Observable<any> {
    const url = `${this.WebApiIt1url}/${id}`;
    return this.http.get(url).pipe(map(this.extractData));
  }

  addCategoria(categoria: Icategoria): Observable<Icategoria> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(categoria);
    const data = JSON.stringify(categoria);
    console.log(data);
    return this.http.post<Icategoria>(this.WebApiIt1url, data, httpOptions)
      .pipe();
  }

  deleteCategoria(id: number): Observable<{}> {
    console.log('delete categoria');
    const url = `${this.WebApiIt1url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
      .pipe(
      )
      ;
  }

  updateCategoria (categoria: Icategoria, id: number): Observable<Icategoria> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const categoriaJson = JSON.stringify(categoria);
  
    const url = `${this.WebApiIt1url}/${id}`;
    return this.http.put<Icategoria>(url, categoria, httpOptions)
      .pipe( );
  
  }

}
