import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
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

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', this.advUrl, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  // getFiles(): Observable<any> {
  //   return this.http.get(`http://localhost:8080//files`);
  // }

  public getAdvertisement(id: string): Observable<Advertisement>{
    return this.http.get<Advertisement>('http://localhost:8080/advertisements/' + id);
  }

}
