import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Globals } from '../shared/api';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StoreService {

  private storesUrl = this.globals.STORES_URL;
  authToken = localStorage.getItem('auth_token');

  constructor(private http: HttpClient, private globals: Globals, private router: Router) { }

  fetchStores(): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

    return this.http.get(this.storesUrl, {headers})
  }

  findStoreByUUID(data: string): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

    return this.http.get(this.storesUrl + data + '/', {headers})
  }

  updateStoreInfo(data: any): Observable<any> {
    console.log(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.authToken
      })
    };

    return this.http.patch(this.storesUrl + data.id + '/', data, httpOptions)
  }

}
