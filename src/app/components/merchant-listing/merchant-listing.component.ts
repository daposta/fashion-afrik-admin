import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
declare var $: any;

@Component({
  selector: 'app-merchant-listing',
  templateUrl: './merchant-listing.component.html',
  styleUrls: ['./merchant-listing.component.css'],
   providers: [ StoreService ]
})
export class MerchantListingComponent implements OnInit {

 merchants: any[];
  error: any;

  constructor(private storeSrv:StoreService) { }

  ngOnInit() {
  	this.fetchProducts();
    // $('[type=file]').filer();
  }

  productDetail(){
  	
  }

  fetchProducts(){
  	this.storeSrv.fetchStores().then(response=> this.merchants = response.results)
  	.catch(err => this.error = err)
  }

}
