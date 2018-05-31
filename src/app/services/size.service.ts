import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class SizeService {
  
  private sizesUrl = this.globals.SIZES_URL;
  authToken = localStorage.getItem('auth_token');

  constructor(private http: HttpClient, private globals: Globals) { }

  fetchSizes() {
    const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

    return this.http.get(this.sizesUrl, {headers})
  }

}
