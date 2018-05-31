import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {TagService} from '../../services/tag.service';

declare var $: any;

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.css'],
  providers: [TagService]
})
export class NewTagComponent implements OnInit {

  formSubmitAttempt: boolean;
  tagForm: FormGroup;
  tag: any = {};
  loading: boolean;

  constructor(fb: FormBuilder, private tagSrv: TagService, private router: Router) {
    this.tagForm = fb.group({
      'name': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  saveTag() {
    this.formSubmitAttempt = true;
    if (this.tagForm.valid) {
      this.loading = true;
      this.tagSrv.saveTag(this.tag).subscribe(
        res => {
          console.log(res);
          this.loading = false;
          $.toast({
            text: 'Tag saved',
            position: 'top-center',
            icon: 'success',
            loader: false,
            allowToastClose: false,
            showHideTransition: 'plain',
            hideAfter: 2000
          });
          this.router.navigateByUrl('/tags');
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
        }
      )
      this.loading = false;
    }
  }

}
