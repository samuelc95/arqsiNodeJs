import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { ImaterialAcabamento } from '../interfaces/materialAcabamento';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class MaterialAcabamentoService {
  [x: string]:any;
  private WebApiIt1url: string = "http://arqsi-1151111-1151112.azurewebsites.net/api/materialacabamentos"
 
  constructor(private http:HttpClient) { }
 
  getMatsAcabs():Observable<any>{
    return this.http.get(this.WebApiIt1url).pipe(map(this.extractData));
  }
  private extractData(res: Response){
    return res || {};
  }
 
  deleteMatAcab(matacabId: number): Observable<{}>{
    console.log("delete material_acabamento");
 
    const url =`${this.WebApiIt1url}/${matacabId}`;
    return this.http.delete(url).pipe();
  }
 
  addMatAcab(matacabId: ImaterialAcabamento): Observable<ImaterialAcabamento> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(matacabId);
    const data = JSON.stringify(matacabId);
    console.log(data);
    return this.http.post<ImaterialAcabamento>(this.WebApiIt1url, data, httpOptions)
      .pipe();
  }
}