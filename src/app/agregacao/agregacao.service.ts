import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAgregacao } from '../interfaces/agregacao';

@Injectable({
  providedIn: 'root'
})
export class AgregacaoService {
  [x: string]: any;
  private WebApiIt1url = 'http://arqsi-1151111-1151112.azurewebsites.net/api/item';
  constructor(private http: HttpClient) { }

  /** getDimensoes() {
    return [
      { 'id': 'e3787cca', 'comprimento': 30, 'profundidade': '20', 'altura': '25' },
      { 'id': 'vergf45gb', 'comprimento': 40, 'profundidade': '10', 'altura': '30' },
    ];
  }*/
  getAgregacoes(): Observable<any> {
    return this.http.get(this.WebApiIt1url).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
  return res || {};
}

getAgregacaoId(id: Number): Observable<any> {
  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.get(url).pipe(map(this.extractData));
}

addAgregacao(agregacao: IAgregacao): Observable<IAgregacao> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  console.log(agregacao);
  const data = JSON.stringify(agregacao);
  console.log(data);
  return this.http.post<IAgregacao>(this.WebApiIt1url, data, httpOptions)
    .pipe();
}

deleteAgregacao (id: number): Observable<{}> {
  console.log('delete agregacao');
  const url = `${this.WebApiIt1url}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url)
    .pipe(
      )
    ;
}

updateAgregacao(agregacao: IAgregacao, id: number): Observable<IAgregacao> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.put<IAgregacao>(url, agregacao, httpOptions)
    .pipe( );

}

}
