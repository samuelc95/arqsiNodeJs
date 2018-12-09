import { Iencomenda } from './../interfaces/encomenda';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {
  [x: string]: any;
  private WebApiIt2url = 'https://arqsiit2nodejs.azurewebsites.net/api/encomenda';
  constructor(private http: HttpClient) { }

  getEncomendas(): Observable<any> {
    return this.http.get(this.WebApiIt2url).pipe(map(this.extractData));
  }
  private extractData(res: Response) {
    return res || {};
  }

  getEncomendaId(id: String): Observable<any> {
    const url = `${this.WebApiIt2url}/${id}`;
    return this.http.get(url).pipe(map(this.extractData));
  }

  addEncomenda(encomenda: Iencomenda): Observable<Iencomenda> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(encomenda);
    const data = JSON.stringify(encomenda);
    console.log(data);
    return this.http.post<Iencomenda>(this.WebApiIt2url, data, httpOptions)
      .pipe();
  }

  deleteEncomenda(id: String): Observable<{}> {
    console.log('delete encomenda');
    const url = `${this.WebApiIt2url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
      .pipe(
        )
      ;
  }
}
