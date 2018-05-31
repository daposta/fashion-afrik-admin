import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class TagService {

  private tagsURL = this.globals.TAGS_URL;
  authToken = localStorage.getItem('auth_token');

  constructor(private http: HttpClient, private router: Router, private globals: Globals) { }

  fetchTags(): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

    return this.http.get(this.tagsURL, {headers})
  }

  saveTag(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.authToken
      })
    };

    return this.http.post(this.tagsURL, data, httpOptions)
  }

}
