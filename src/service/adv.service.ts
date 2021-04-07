import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Advertisement} from "../spec/advertisement";

@Injectable({
  providedIn: 'root'
})
export class AdvService {
  advUrl: string;

  constructor(private http: HttpClient) {
    this.advUrl='http://localhost:8080/advertisements'
  }

  public findAll(): Observable<Advertisement[]> {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' +sessionStorage.getItem('token')});
    return this.http.get<Advertisement[]>(this.advUrl,
      // {headers}
    );
  }
  public save(adv: Advertisement) {
    return this.http.post<Advertisement>(this.advUrl, adv);
  }
}
