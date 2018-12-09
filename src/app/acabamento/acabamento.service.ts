import { Iacabamento } from '../interfaces/acabamento';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcabamentoService {
  [x: string]: any;
  private WebApiIt1url = 'http://arqsi-1151111-1151112.azurewebsites.net/api/acabamento';
constructor(private http: HttpClient) { }

getAcabamentos(): Observable<any> {
  return this.http.get(this.WebApiIt1url).pipe(map(this.extractData));
}
private extractData(res: Response) {
  return res || {};
}

getAcabamentoId(id: Number): Observable<any> {
  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.get(url).pipe(map(this.extractData));
}

addAcabamento(acabamento: Iacabamento): Observable<Iacabamento> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  console.log(acabamento);
  const data = JSON.stringify(acabamento);
  console.log(data);
  return this.http.post<Iacabamento>(this.WebApiIt1url, data, httpOptions)
    .pipe();
}

deleteAcabamento(id: number): Observable<{}> {
  console.log('delete acabamento');
  const url = `${this.WebApiIt1url}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url)
    .pipe(
      )
    ;
}

updateAcabamento (acabamento: Iacabamento, id: number): Observable<Iacabamento> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const materialJson = JSON.stringify(acabamento);

  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.put<Iacabamento>(url, acabamento, httpOptions)
    .pipe( );

}

}
