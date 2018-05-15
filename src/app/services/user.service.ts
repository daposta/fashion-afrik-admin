import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Globals } from '../shared/api';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

declare var $: any;



@Injectable()
export class UserService {

	private loginUrl = this.globals.LOGIN_URL;
	private logoutUrl = this.globals.LOGOUT_URL;
	private registerUrl = this.globals.REGISTER_URL;
	private userProfileUrl = this.globals.CURRENT_PROFILE_URL;
	private activationUrl = this.globals.ACCOUNT_ACTIVATION_URL;


	private loggedIn = false;

	authToken = localStorage.getItem('auth_token');


	// constructor(private http: Http, private router: Router, private globals: Globals) { }
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
		return this.http.post(this.logoutUrl, {}, httpOptions)
	}

	register(data: any): Observable<any> {
		const headers = new HttpHeaders({'Content-Type': 'application/json'})

		return this.http.post(this.registerUrl, JSON.stringify(data))
	}

	// activateAccount(data: any) {
	// 	console.log(data);
	// 	return this.http.get(this.activationUrl + data['uid'] + '/' + data['token'] + '/')
	// 		.toPromise()
	// 		.then(response => response.json())
	// 		.catch(this.handleError);
	// };

	getCurrentProfile(): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.authToken
			})
		};
		return this.http.get(this.userProfileUrl, httpOptions)
	}

	private page_header() {
		let data = localStorage.getItem('auth_token');
		let headers = new Headers();
		let opt: RequestOptions;
		headers.append('Authorization', 'JWT ' + data);
		opt = new RequestOptions({ headers: headers });
		return opt;
	}


	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	};


}
