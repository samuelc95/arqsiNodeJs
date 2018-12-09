import { Irestricao } from './../interfaces/restricao';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestricaoService {
  [x: string]: any;
  private WebApiIt1url = 'http://arqsi-1151111-1151112.azurewebsites.net/api/restriction';
constructor(private http: HttpClient) { }

getRestricoes(): Observable<any> {
  return this.http.get(this.WebApiIt1url).pipe(map(this.extractData));
}
private extractData(res: Response) {
  return res || {};
}

getRestricaoId(id: Number): Observable<any> {
  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.get(url).pipe(map(this.extractData));
}

addRestricao(restricao: Irestricao): Observable<Irestricao> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  console.log(restricao);
  const data = JSON.stringify(restricao);
  console.log(data);
  return this.http.post<Irestricao>(this.WebApiIt1url, data, httpOptions)
    .pipe();
}

deleteRestricao(id: number): Observable<{}> {
  console.log('delete prestricao');
  const url = `${this.WebApiIt1url}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url)
    .pipe(
      )
    ;
}

updateRestricao (restricao: Irestricao, id: number): Observable<Irestricao> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const materialJson = JSON.stringify(restricao);

  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.put<Irestricao>(url, restricao, httpOptions)
    .pipe( );

}

}
