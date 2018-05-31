import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
  providers: [CategoryService]
})
export class NewCategoryComponent implements OnInit {

  formSubmitAttempt: boolean;
  categoryForm: FormGroup;
  category: any = {};
  error: any;
  loading: boolean;

  constructor(fb: FormBuilder, private categorySrv: CategoryService, private router: Router) {
    this.categoryForm = fb.group({
      'name': ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  saveCategory() {
    this.formSubmitAttempt = true;
    if (this.categoryForm.valid) {
      this.loading = true;
      this.categorySrv.saveCategory(this.category)
        .subscribe(res => {
          console.log(res);
          this.loading = false;
          $.toast({
            text: 'Category saved',
            position: 'top-center',
            icon: 'success',
            loader: false,
            allowToastClose: false,
            showHideTransition: 'plain',
            hideAfter: 2000
          });
          this.router.navigateByUrl('/categorys');
        }, err => {
          console.log(err);
          this.loading = false;
          $.toast({
            text: 'Category not saved',
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
