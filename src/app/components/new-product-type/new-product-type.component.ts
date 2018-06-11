import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { ProductTypeService } from '../../services/product-type.service';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-new-product-type',
  templateUrl: './new-product-type.component.html',
  styleUrls: ['./new-product-type.component.css'],
  providers: [ProductTypeService, CategoryService]
})

export class NewProductTypeComponent implements OnInit {


  private formSubmitAttempt: boolean;
  productTypeForm: FormGroup;
  productType: any = {};
  parentCategorys: any[];
  loading: boolean;

  error: any;

  constructor(private fb: FormBuilder, private productTypeSrv: ProductTypeService, private categorySrv: CategoryService, private router: Router) { }



  ngOnInit() {
    this.productTypeForm = this.fb.group({
      'name': ['', Validators.required],
      'l1category': ['', Validators.required],
    });

    this.fetchCategorys();
  }

  fetchCategorys() {

    this.categorySrv.fetchCategories().subscribe(res => {

        this.parentCategorys = res.data;
        // console.log(this.parentCategorys);
      }, err => {
        
        console.log(err);
      });
  }

  saveProductType() {
    this.formSubmitAttempt = true;

    if (this.productTypeForm.valid) {
      this.loading = true;
      // console.log(this.productType);
      this.productTypeSrv.saveProductType(this.productType)
        .subscribe(res => {
          // console.log(res);
          this.loading = false;
          $.toast({
            text: 'Product type saved',
            position: 'top-center',
            icon: 'success',
            loader: false,
            allowToastClose: false,
            showHideTransition: 'plain',
            hideAfter: 2000
          });
          this.router.navigateByUrl('/product-types');
        }, err => {
          console.log(err);
          this.loading = false;
          $.toast({
            text: 'Product type not saved',
            position: 'top-center',
            icon: 'error',
            loader: false,
            allowToastClose: false,
            showHideTransition: 'plain',
            hideAfter: 2000
          });
        })
      this.loading = false;
    }
  }

}
