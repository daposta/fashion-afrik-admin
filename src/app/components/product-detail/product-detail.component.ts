import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { ProductTypeService } from '../../services/product-type.service';
import { CurrencyService } from '../../services/currency.service';
import { ColorService } from '../../services/color.service';
import { SizeService } from '../../services/size.service';
import { SubCategoryService } from '../../services/sub-category.service';
import { TagService } from '../../services/tag.service'


import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import 'rxjs/add/operator/switchMap';
import { Globals } from '../../shared/api';
import { DISABLED } from '@angular/forms/src/model';

declare var $: any;


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService, CategoryService, ProductTypeService, CurrencyService,
    ColorService, SizeService, SubCategoryService, TagService]
})
export class ProductDetailComponent implements OnInit {

  product: any = {};
  new_product: Object = {};
  host_address: string = this.globals.HOST_URL;
  categorys: any[];
  productTypes: any[];
  subCategorys: any[];
  currencys: any[];
  colors: any[];
  tags: any[];
  sizes: any[];
  error: any;
  formSubmitAttempt: boolean;
  loading: boolean;
  productForm: FormGroup;
  allOther_images: string[] = [];

  constructor(private productSrv: ProductService, private route: ActivatedRoute, private globals: Globals,
    private categorySrv: CategoryService, private productTypeSrv: ProductTypeService, fb: FormBuilder,
    private currencySrv: CurrencyService, private colorSrv: ColorService,
    private sizeSrv: SizeService, private subCategorySrv: SubCategoryService, private tagSrv: TagService, private router: Router) {
    this.productForm = fb.group({
      'id': [''],
      'name': [{ value: '', disabled: true }],
      'status': [''],
      'description': [{ value: '', disabled: true }],
      'sizes': [{ value: '', disabled: true }],
      'colors': [{ value: '', disabled: true }],
      'otherColors': [{ value: '', disabled: true }],
      'price': [{ value: '', disabled: true }],
      'productCategory': [{ value: '', disabled: true }],
      'productType': [{ value: '', disabled: true }],
      'subCategory': [{ value: '', disabled: true }],
      'currency': [{ value: '', disabled: true }],
      'tags': [{ value: '', disabled: true }],
      'isClearance': [{ value: '', disabled: true }],
      'isNewArrival': [{ value: '', disabled: true }],
      'discountPrice': [{ value: '', disabled: true }],

    });
  }

  ngOnInit() {

    this.route.params.switchMap((params: Params) =>
      this.productSrv.findProductByUUID(params['id']))
      .subscribe(product => this.onProductRetrieved(product)),
      (error => console.log(error))


    // this.route.params.switchMap((params: Params) =>
    //   this.productSrv.findProductByUUID(params['id']))
    //   .subscribe(
    //     data => {
    //       this.product = data;
    //       let tags_temp = '';
    //       data.tags.forEach(item => {

    //         tags_temp += item.name + ', ';
    //       });

    //       this.product['tags_temp'] = tags_temp;

    //       let other_colors_temp = '';
    //       data.mixed_colors.forEach(item => {

    //         other_colors_temp += item.name + ', ';
    //       });

    //       this.product['other_colors_temp'] = other_colors_temp;

    //       let colors_list = [];
    //       data.colors.forEach(function (item: any) {
    //         colors_list.push(item.id);
    //       });
    //       this.product['colors_list'] = colors_list;
    //       //set category as selected

    //       // this.product['category'] = data.category? data.category.id : null;
    //       //  this.product['product_ty'] = data.category? data.category.id : null;

    //     }

    //   );

    this.fetchCategorys();
    this.fetchProductTypes();
    this.fetchSubCategorys();
    this.fetchCurrencys();
    this.fetchSizes();
    this.fetchColors();
    this.fetchTags();

  };

  onProductRetrieved(product) {
    // if (this.productForm) {
    //   this.productForm.reset();
    // }
    this.product = product;
    console.log(product);

    product.other_images.forEach(item => {
      this.allOther_images.push(item.image);
    });

    this.productForm.patchValue({
      'id': this.product.id,
      'currency': product.currency.code,
      'productType': product.l2category.name,
      'category': product.l1category.name,
      'subCategory': product.l3category.name,
    })
  }

  fetchCategorys() {
    this.categorySrv.fetchCategories().subscribe((res: any) => {
      this.categorys = res;
    }, err => {
      console.log(err);
    })
  }

  fetchProductTypes() {
    this.productTypeSrv.fetchProductTypes().subscribe((res: any) => {
      this.productTypes = res;
    }, err => {
      console.log(err);
    })
  }

  fetchSubCategorys() {
    this.subCategorySrv.fetchSubCategorys().subscribe((res: any) => {
      this.subCategorys = res;
    }, err => {
      console.log(err);
    })
  }

  fetchCurrencys() {
    this.currencySrv.fetchCurrencys().subscribe((res: any) => {
      this.currencys = res;
      console.log(this.currencys);
    }, err => {
      console.log(err);
    })
  }

  fetchSizes() {
    this.sizeSrv.fetchSizes().subscribe((res: any) => {
      this.sizes = res;
    }, err => {
      console.log(err);
    })
  }

  fetchColors() {
    this.colorSrv.fetchColors().subscribe((res: any) => {
      this.colors = res;
    }, err => {
      console.log(err);
    })
  }

  fetchTags() {
    this.tagSrv.fetchTags().subscribe((res: any) => {
      this.tags = res;
      console.log(this.tags);
    }, err => {
      console.log(err);
    })
  }



  checkColorSelected(color) {

    if (this.product['colors']) {

      return this.product['colors'].findIndex(selUser => selUser.slug === color) > -1;
    }

    //return this.selectedUsers3.filter(selUser => selUser.id === user.id).length > 0;
  }


  checkSizeSelected(size) {

    if (this.product['sizes']) {

      return this.product['sizes'].findIndex(selUser => selUser.name === size) > -1;
    }

    //return this.selectedUsers3.filter(selUser => selUser.id === user.id).length > 0;
  }


  // updateProduct() {
  //   this.new_product['id'] = this.product['id'];
  //   this.productSrv.updateProductInfo(this.new_product);

  // };

  updateProduct() {
    this.loading = true;
    console.log(this.productForm.value);

    this.productSrv.updateProduct(this.productForm.value)
      .subscribe(res => {
        this.loading = false;
        // console.log(res);
        $.toast({
          text: 'Product updated',
          position: 'top-center',
          icon: 'success',
          loader: false,
          allowToastClose: false,
          showHideTransition: 'plain',
          hideAfter: 2000,
        });
        this.router.navigateByUrl('/products');
      }, err => {
        this.loading = false;
        console.log(err);
        $.toast({
          text: 'Product update failed',
          position: 'top-center',
          icon: 'error',
          loader: false,
          allowToastClose: false,
          showHideTransition: 'plain',
          hideAfter: 2000,
        });
      })
      this.loading = false;
  }


  removeOtherImages(productID) {
    console.log(productID);
    alert('remove other');
  };


  removeBannerImage(productID) {
    console.log(productID);
    alert('remove banner');
  };


  addOtherImages() {
    alert('add other');

  };




  addBannerImage() {
    alert('add banner image');

  };







}
