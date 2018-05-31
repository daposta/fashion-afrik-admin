import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ProductService {

  private productsUrl = this.globals.PRODUCTS_URL;
  authToken = localStorage.getItem('auth_token');

  constructor(private http: HttpClient, private globals: Globals, private router: Router) { }

  fetchProducts(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'JWT ' + this.authToken })

    return this.http.get(this.productsUrl, { headers })

  }

  findProductByUUID(data: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'JWT ' + this.authToken })

    return this.http.get(this.productsUrl + data + '/', { headers })

  }

  updateProduct(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.authToken
      })
    }

    return this.http.patch(this.productsUrl + data.id + '/', data, httpOptions)
  }

  //    updateProductInfo(product:any= {}){
  //      let v = this.page_header();
  //     //let _data = JSON.stringify(product);
  //     if (product){
  //         this.http.patch(this.productsUrl + product.id + '/', product, v).subscribe(
  //            data => {

  //              //this.toasterService.pop('success', 'Client Info updated', '');
  //              let msg = JSON.parse(data['_body'])['message'];
  //               $.toast({
  //                   text: msg,
  //                    position: 'top-center',
  //                    'icon': 'success',
  //                   showHideTransition: 'slide',
  //               });
  //               this.router.navigateByUrl('products/' + product.id);

  //            },
  //            error => {
  //              let msg = JSON.parse(error._body)['message'];

  //               $.toast({
  //                     text: msg,
  //                      position: 'top-center',
  //                      'icon': 'error',
  //                      showHideTransition: 'slide',
  //                 });
  //            }
  //         );
  //     }


  //   };

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
