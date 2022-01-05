import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Official } from 'src/app/models/Official';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getOfficialByUser(user: any): Observable<any> {
    return this.http.get<any>(`${environment.base_url}/customers/${user}/official`);
  }

  getAdvertisements(): Observable<any> {
    return this.http.get<any>(`${environment.base_url}/advertisements`);
  }



}
