import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.htpp.get<UserModel[]>(environment.url_api).pipe(
      map(response => response)
    );
  }

  findUserById(userId: number): Observable<UserModel> {
    return this.htpp.get<UserModel>(`${environment.url_api}/${userId}`);
  }

}
