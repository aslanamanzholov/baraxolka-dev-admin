import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private BASE_URL:string='http://86.107.198.215:80/api/v1/'

  addCategory(name: string): Observable<any> {
    return this.http.post(
      `http://localhost:8080/category/new?name=${name}`,
      {}
    );
  }

  getAllByDetails(floor: number, bazar: string): Observable<any> {
    return this.http.get(
      `http://86.107.198.215:80/api/v1/market/boutique-address/?bazar=Akbulak&floor=1&limit=214`
      ,{headers:{
        'Authorization':`Token 77cef3e345363121c43e2ed5374c3dae6b03a65e`
        }}
    );
  }


  getAllCategories(): Observable<any> {
    return of(['SPORT' , 'HOBBY' , 'HOME_THINGS']);
  }

  save(request: any): Observable<any> {
    console.log(request)
    return this.http.post(`http://localhost:8080/boutique/save`, request);
  }


  deleteBoutiqueById(id: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/boutique/${id}`);
  }

  update(id: any, request: any) {
    if (id) {
      this.http
        .put(`http://localhost:8080/boutique/${id}`, request)
        .subscribe((r) => console.log('response' + r));
    }
  }
}
