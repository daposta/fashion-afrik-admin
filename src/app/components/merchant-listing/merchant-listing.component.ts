import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

declare var $: any;

@Component({
  selector: 'app-merchant-listing',
  templateUrl: './merchant-listing.component.html',
  styleUrls: ['./merchant-listing.component.css'],
  providers: [StoreService]
})
export class MerchantListingComponent implements OnInit {

  merchants: any[];
  public search: any = '';

  constructor(private storeSrv: StoreService) { }

  ngOnInit() {
    this.fetchMerchants();
  }

  fetchMerchants() {
    this.storeSrv.fetchStores()
     .subscribe(res => {
       this.merchants = res;
      //  console.log(this.merchants);
     }, err => {
       console.log(err);
     })
  }

}
