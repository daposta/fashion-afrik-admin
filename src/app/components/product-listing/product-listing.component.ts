import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
declare var $: any;
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
   providers: [ ProductService ]
})
export class ProductListingComponent implements OnInit {
  
  products: any[];
  error: any;

  constructor(private productSrv:ProductService) { }

  ngOnInit() {
  	this.fetchProducts();
    // $('[type=file]').filer();
  }

  productDetail(){
  	
  }

  fetchProducts(){

    this.productSrv.fetchProducts().subscribe(res => {
        // console.log(res);
        this.products = res.data;
      }, err => {
        
        console.log(err);
      }
    )
  }

}
