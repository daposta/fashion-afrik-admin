import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from '../../services/product-type.service';

@Component({
  selector: 'app-product-type-listing',
  templateUrl: './product-type-listing.component.html',
  styleUrls: ['./product-type-listing.component.css'],
  providers: [ ProductTypeService ]
})
export class ProductTypeListingComponent implements OnInit {
  
  productTypes: any[];
  error: any;
  constructor(private productTypeSrv:ProductTypeService) { }

  ngOnInit() {
  	this.fetchProductTypes()
  }

  fetchProductTypes() {
    this.productTypeSrv.fetchProductTypes()
      .subscribe(res => {
        console.log(res);
        this.productTypes = res;
      }, err => {
        console.log(err);
      })
  }

}
