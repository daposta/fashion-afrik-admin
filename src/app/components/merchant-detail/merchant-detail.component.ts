import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup, Validators, FormArray} from '@angular/forms'
import {Router, ActivatedRoute, Params} from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.css'],
   providers: [ StoreService ]
})
export class MerchantDetailComponent implements OnInit {
 
  private formSubmitAttempt: boolean;

  storeForm:FormGroup;
   store: any= {};

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private storeSrv:StoreService,) { }

 ngOnInit() {
  	 this.storeForm = this.fb.group({
        'name':['', Validators.required],
         'description':['', Validators.required],
          'address1':['', ],
           'mobile':['', Validators.required],
        //'subCategories': [],
        

      });
  	 this.route.params.switchMap((params: Params) => 
			 	this.storeSrv.findStoreByUUID( params['id']))
			 .subscribe(
			 	data => {
			           this.store = data;
                    
			         }

			 	);
      
  }


   updateMerchantInfo(data){
    this.formSubmitAttempt = true;
    if (this.storeForm.valid){
       this.store['id'] = this.store['id'];
  	    this.storeSrv.updateStoreInfo(this.store);
       }
  }

}
