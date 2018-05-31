import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CurrencyService {

  private currencysUrl = this.globals.CURRENCY_URL;
  authToken = localStorage.getItem('auth_token');

  constructor(private http: HttpClient, private globals: Globals) { }

  fetchCurrencys() {
    const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

    return this.http.get(this.currencysUrl, {headers})
  }

}
