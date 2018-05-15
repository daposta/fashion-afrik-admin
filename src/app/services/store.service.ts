import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Router} from '@angular/router';
import { Globals } from '../shared/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoreService {


  private merchantsUrl = this.globals.MERCHANTS_URL; 

  constructor(private http: Http, private globals: Globals,  private router:Router) { }

  fetchStores(){
  	  let v = this.page_header();
    return this.http.get(this.merchantsUrl, v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };

  findStoreByUUID(data: string){
   
    let v = this.page_header();
    console.log(data);
     return this.http.get(this.merchantsUrl + data +'/', v)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  };


  updateStoreInfo(product:any= {}){
     let v = this.page_header();
    //let _data = JSON.stringify(product);
    if (product){
        this.http.patch(this.merchantsUrl + product.id + '/', product, v).subscribe(
           data => {

             //this.toasterService.pop('success', 'Client Info updated', '');
             let msg = JSON.parse(data['_body'])['message'];
              
            
           },
           error => {
             let msg = JSON.parse(error._body)['message'];
        
             
           }
        );
    }
     

  };



  private page_header(){
     let data =  localStorage.getItem('auth_token');
      let headers = new Headers();
      let opt: RequestOptions;
      headers.append('Authorization', 'JWT ' + data );
      opt = new RequestOptions({headers: headers})  ;
      return opt;
  }

   private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  };

}
