import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Idimensao } from '../interfaces/dimensao';

@Injectable({
  providedIn: 'root'
})
export class DimensaoService {
  [x: string]: any;
  private WebApiIt1url = 'http://arqsi-1151111-1151112.azurewebsites.net/api/dimension';
  constructor(private http: HttpClient) { }

  /** getDimensoes() {
    return [
      { 'id': 'e3787cca', 'comprimento': 30, 'profundidade': '20', 'altura': '25' },
      { 'id': 'vergf45gb', 'comprimento': 40, 'profundidade': '10', 'altura': '30' },
    ];
  }*/
  getDimensoes(): Observable<any> {
    return this.http.get(this.WebApiIt1url).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
  return res || {};
}

getDimensaoId(id: Number): Observable<any> {
  
  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.get(url).pipe(map(this.extractData));
}

addDimensao(dimensao: Idimensao): Observable<Idimensao> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  console.log(dimensao);
  const data = JSON.stringify(dimensao);
  console.log(data);
  return this.http.post<Idimensao>(this.WebApiIt1url, data, httpOptions)
    .pipe();
}

deleteDimension (id: number): Observable<{}> {
  console.log('delete dimension');
  const url = `${this.WebApiIt1url}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url)
    .pipe(
      )
    ;
}

updateDimensao(dimensao: Idimensao, id: number): Observable<Idimensao> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const materialJson = JSON.stringify(dimensao);

  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.put<Idimensao>(url, dimensao, httpOptions)
    .pipe( );

}

}
