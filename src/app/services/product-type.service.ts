import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductTypeService {

    productTypeURL = this.globals.PRODUCT_TYPE_URL;
    authToken = localStorage.getItem('auth_token');

    constructor(private http: HttpClient, private globals: Globals, private router: Router) { }

    fetchProductTypes(): Observable<any> {
        const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

        return this.http.get(this.productTypeURL, {headers})
    }

    fetchProductTypesParam(category): Observable<any> {
        // console.log(category);
        const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

        let params = new HttpParams().set('l1category', category)

        return this.http.get(this.productTypeURL, {headers: headers, params})
    }

    saveProductType(data: any): Observable<any> {
        const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

        return this.http.post(this.productTypeURL, data, {headers})
    }

    
    //   findProductTypeByID(data: string){

    //     let v = this.page_header();
    //      return this.http.get(this.productTypeURL + data +'/', v)
    //               .toPromise()
    //               .then(response => response.json())
    //               .catch(this.handleError);
    //   };


    // updateProductTypeInfo(product: any = {}) {
    //     let v = this.page_header();
    //     //let _data = JSON.stringify(product);
    //     if (product) {
    //         this.http.patch(this.productTypeURL + product.id + '/', product, v).subscribe(
    //             data => {

    //                 //this.toasterService.pop('success', 'Client Info updated', '');
    //                 let msg = JSON.parse(data['_body'])['message'];
    //                 $.toast({
    //                     text: msg,
    //                     position: 'top-center',
    //                     'icon': 'success',
    //                     showHideTransition: 'slide',
    //                 });
    //                 //this.router.navigateByUrl('products/' + product.id);

    //             },
    //             error => {
    //                 let msg = JSON.parse(error._body)['message'];

    //                 $.toast({
    //                     text: msg,
    //                     position: 'top-center',
    //                     'icon': 'error',
    //                     showHideTransition: 'slide',
    //                 });
    //             }
    //         );
    //     }


    // };


    private page_header() {
        let data = localStorage.getItem('auth_token');
        let headers = new Headers();
        let opt: RequestOptions;
        headers.append('Authorization', 'JWT ' + data);
        opt = new RequestOptions({ headers: headers });
        return opt;
    };


    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };



}
