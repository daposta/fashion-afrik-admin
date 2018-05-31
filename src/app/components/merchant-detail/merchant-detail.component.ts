import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StoreService } from '../../services/store.service';

declare var $: any;

@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.css'],
  providers: [StoreService]
})
export class MerchantDetailComponent implements OnInit {

  formSubmitAttempt: boolean;
  loading: boolean;
  storeForm: FormGroup;
  merchantProfile: any = {};
  store: any = {};

  constructor(private fb: FormBuilder, private storeSrv: StoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.storeForm = this.fb.group({
      'name': [''],
      'id': [''],
      'description': [''],
      'address': [''],
      'status': ['']
    });

    this.route.params.switchMap((params: Params) => 
      this.storeSrv.findStoreByUUID(params['id']))
        .subscribe(store => this.onStoreRetrieved(store)),
        (error => console.log(error))

  }

  onStoreRetrieved(store) {
    if (this.storeForm) {
      this.storeForm.reset();
    }
    this.store = store;
    // console.log(store);

    this.storeForm.setValue({
      'id': this.store.id,
      'name': this.store.name,
      'description': this.store.description,
      'address': this.store.address,
      'status': this.store.status,
    });
  }

  updateMerchantInfo() {
    this.formSubmitAttempt = true;
    this.loading = true;
    // console.log(this.storeForm.value);

    this.storeSrv.updateStoreInfo(this.storeForm.value)
      .subscribe(res => {
        this.loading = false;
        // console.log(res);
        $.toast({
          text: 'Profile updated',
          position: 'top-center',
          icon: 'success',
          loader: false,
          allowToastClose: false,
          showHideTransition: 'plain',
          hideAfter: 2000,
        });
        this.router.navigateByUrl('/merchants');
      }, err => {
        this.loading = false;
        console.log(err);
        $.toast({
          text: 'Profile update failed',
          position: 'top-center',
          icon: 'error',
          loader: false,
          allowToastClose: false,
          showHideTransition: 'plain',
          hideAfter: 2000,
        });
      });
  }

}
