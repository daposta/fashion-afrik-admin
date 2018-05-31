import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../shared/api';

@Injectable()
export class UserService {

	private loginUrl = this.globals.LOGIN_URL;
	private logoutUrl = this.globals.LOGOUT_URL;
	private activationUrl = this.globals.ACCOUNT_ACTIVATION_URL;

	authToken = localStorage.getItem('auth_token');

	constructor(private http: HttpClient, private router: Router, private globals: Globals) { }

	login(email: string, password: string): Observable<any> {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

		return this.http.post(this.loginUrl, JSON.stringify({ email, password }), { headers })
	}

	logout(): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.authToken
			})
		};
		return this.http.get(this.logoutUrl, httpOptions)
	}
}
