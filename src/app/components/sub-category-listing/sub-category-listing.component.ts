import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from '../../services/product-type.service';
import { SubCategoryService } from '../../services/sub-category.service';
import { resolveDefinition } from '@angular/core/src/view/util';

@Component({
  selector: 'app-sub-category-listing',
  templateUrl: './sub-category-listing.component.html',
  styleUrls: ['./sub-category-listing.component.css'],
  providers: [ProductTypeService, SubCategoryService]
})
export class SubCategoryListingComponent implements OnInit {
  subCategorys: any[];
  error: any;
  constructor(private productTypeSrv: ProductTypeService, private subCategorySrv: SubCategoryService) { }

  ngOnInit() {

    this.fetchSubCategorys()
  }

  fetchSubCategorys() {

    this.subCategorySrv.fetchSubCategorys().subscribe(res => {

        // console.log(res);
        this.subCategorys = res.data;
      }, err => {
        
        console.log(err);
      })
  }

}
