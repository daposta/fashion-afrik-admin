import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Globals } from '../shared/api';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubCategoryService {

  private subCategoryURL = this.globals.SUB_CATEGORYS_URL;
  authToken = localStorage.getItem('auth_token');

  constructor(private http: HttpClient, private globals: Globals, private router: Router) { }

  fetchSubCategorys(): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

    return this.http.get(this.subCategoryURL, {headers})
  }

  //   findSubCategoryByID(data: string){

  //     let v = this.page_header();
  //      return this.http.get(this.subCategoryURL + data +'/', v)
  //               .toPromise()
  //               .then(response => response.json())
  //               .catch(this.handleError);
  //   };

  saveSubCategory(data: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

    return this.http.post(this.subCategoryURL, data, {headers})
  }

  //   updateSubCategory(product:any= {}){
  //      let v = this.page_header();
  //     //let _data = JSON.stringify(product);
  //     if (product){
  //         this.http.patch(this.subCategoryURL + product.id + '/', product, v).subscribe(
  //            data => {

  //              //this.toasterService.pop('success', 'Client Info updated', '');
  //              let msg = JSON.parse(data['_body'])['message'];
  //               $.toast({
  //                   text: msg,
  //                    position: 'top-center',
  //                    'icon': 'success',
  //                   showHideTransition: 'slide',
  //               });
  //               //this.router.navigateByUrl('products/' + product.id);

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
  };


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  };


}
