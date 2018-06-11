import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { ProductTypeService } from '../../services/product-type.service';
import { SubCategoryService } from '../../services/sub-category.service';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-new-sub-category',
  templateUrl: './new-sub-category.component.html',
  styleUrls: ['./new-sub-category.component.css'],
  providers: [ProductTypeService, SubCategoryService, CategoryService]
})
export class NewSubCategoryComponent implements OnInit {

  formSubmitAttempt: boolean;
  subCategoryForm: FormGroup;
  subCategory: any = {};
  items: any[] = [];
  productTypes: any[];
  categorys: any[];
  newProductTypes: any[];
  loading: boolean;

  error: any;

  constructor(private fb: FormBuilder, private productTypeSrv: ProductTypeService, private subCategorySrv: SubCategoryService, private categorySrv: CategoryService, private router: Router) {

    this.subCategoryForm = this.fb.group({
      'name': ['', Validators.required],
      'l2category': ['', Validators.required],
      'l1category': ['', Validators.required],
    });

  }



  ngOnInit() {

    // this.fetchProductTypes();
    this.fetchCategorys();
  }

  //  fetchProductTypes(){
  // 	this.productTypeSrv.fetchProductTypes().then(response => this.productTypes = response.results)
  // 	.catch(err => this.error = err)
  // }

  // fetchProductTypeForCategory(event) {
  //   let category = event.target.src;
  //   this.productTypeSrv.fetchProductTypes(category).then(response => this.productTypes = response.results)
  //     .catch(err => this.error = err)
  // }


  fetchCategorys() {

    this.categorySrv.fetchCategories().subscribe(res => {

        // console.log(res);
        this.categorys = res.data;
      }, err => {

        console.log(err);
      })
  }

  fetchProductTypeForCategory(event) {

    // let category = event.target.id;
    let category = event.srcElement.attributes.value || event.currentTarget.value;
    console.log(category);
    this.productTypeSrv.fetchProductTypesParam(category).subscribe(res => {

        this.productTypes = res.data;
        // console.log(this.productTypes);
      }, err => {
        
        console.log(err);
      })
  }

  saveCategory(data) {
    this.formSubmitAttempt = true;

    if (this.subCategoryForm.valid) {
      console.log(this.subCategoryForm.value);
      
      this.loading = true;
      this.subCategorySrv.saveSubCategory(data)
        .subscribe(res => {
          console.log(res);
          this.loading = false;
          $.toast({
            text: 'Saved',
            position: 'top-center',
            icon: 'success',
            showHideTransition: 'slide',
          });
          this.router.navigateByUrl('/sub-categorys');
        }, err => {
          console.log(err);
          this.loading = false;
          $.toast({
            text: 'Not Saved',
            position: 'top-center',
            icon: 'error',
            showHideTransition: 'slide',
          });
        })
    }
  }

}
