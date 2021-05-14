import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Advertisement} from "../spec/advertisement";
import {Register} from "../spec/register";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  advUrl: string;

  constructor(private http: HttpClient) {
    this.advUrl='http://localhost:8080/user'
  }

  public getUserByName(username: string): Observable<Register> {
    return this.http.get<Register>(this.advUrl + "/" + username,
    );
  }
  // getPublicContent(): Observable<any> {
  //   return this.http.get(API_URL , { responseType: 'text' });
  // }
  //
  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }
  //
  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }
  //
  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }
}
