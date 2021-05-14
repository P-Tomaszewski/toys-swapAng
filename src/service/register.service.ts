import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Register} from "../spec/register";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  regUrl: string;

  constructor(private http: HttpClient) {
    this.regUrl='http://localhost:8080/api/auth/signup'
  }

  public findAll(): Observable<Register[]> {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' +sessionStorage.getItem('token')});
    return this.http.get<Register[]>(this.regUrl,
      // {headers}
    );
  }
  public save(reg: Register) {
    return this.http.post<Register>(this.regUrl, reg);
  }
}
