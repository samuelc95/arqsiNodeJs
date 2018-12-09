import { Imaterial } from '../interfaces/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  [x: string]: any;
  private WebApiIt1url = 'http://arqsi-1151111-1151112.azurewebsites.net/api/material';
constructor(private http: HttpClient) { }

 getMateriais(): Observable<any> {
  return this.http.get(this.WebApiIt1url).pipe(map(this.extractData));
}
private extractData(res: Response) {
  return res || {};
}

getMaterialId(id: Number): Observable<any> {
  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.get(url).pipe(map(this.extractData));
}

addMaterial(material: Imaterial): Observable<Imaterial> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  console.log(material);
  const data = JSON.stringify(material);
  console.log(data);
  return this.http.post<Imaterial>(this.WebApiIt1url, data, httpOptions)
    .pipe();
}

deleteMaterial(id: number): Observable<{}> {
  console.log('delete material');
  const url = `${this.WebApiIt1url}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url)
    .pipe(
      )
    ;
}

updateMaterial (material: Imaterial, id: number): Observable<Imaterial> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const materialJson = JSON.stringify(material);

  const url = `${this.WebApiIt1url}/${id}`;
  return this.http.put<Imaterial>(url, material, httpOptions)
    .pipe( );

}

}
