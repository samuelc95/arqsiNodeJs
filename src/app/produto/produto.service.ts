import { Iproduto } from './../interfaces/produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  [x: string]: any;
  private WebApiIt1url = 'http://arqsi-1151111-1151112.azurewebsites.net/api/produtos';
constructor(private http: HttpClient) { }

getProdutos(): Observable<any> {
  return this.http.get(this.WebApiIt1url).pipe(map(this.extractData));
}

private extractData(res: Response) {
  return res || {};
}

getProdutoId(id: Number): Observable<any> {
  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.get(url).pipe(map(this.extractData));
}

addProduto(produto: Iproduto): Observable<Iproduto> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  console.log(produto);
  const data = JSON.stringify(produto);
  console.log('prod finaaaal -> ' +data);
  return this.http.post<Iproduto>(this.WebApiIt1url, data, httpOptions)
    .pipe();
}

deleteProduto (id: number): Observable<{}> {
  console.log('delete produto');
  const url = `${this.WebApiIt1url}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url)
    .pipe(
      )
    ;
}


}

