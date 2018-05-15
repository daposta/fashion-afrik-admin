import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../../services/user.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {


  store: any = {};
  registrationForm: FormGroup;
  formSubmitAttempt: boolean;
  loading: boolean;

  constructor(fb: FormBuilder, private userSrv: UserService) {

    this.registrationForm = fb.group({
      'storeName': ['', Validators.required],
      'description': ['', Validators.required],
      'address': ['', Validators.required],
      'mobile': ['', Validators.required],
      'email': ['', [Validators.required]],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
      'agreedToTerms': ['', Validators.required],
    }, { validator: this.checkPasswords });

  };

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;


    return pass === confirmPass ? null : { notSame: true };

  };

  ngOnInit() {
  }

  register() {
    this.formSubmitAttempt = true;
    if (this.registrationForm.valid) {
      this.loading = true;
      this.userSrv.register(this.store)
        .subscribe(res => {
          console.log(res);
          this.loading = false;
          let msg = JSON.parse(res['_body'])['message'];
          $.toast({
            text: msg,
            position: 'top-center',
            'icon': 'success',
            showHideTransition: 'slide',
          });
        }, err => {
          console.log(err);
          this.loading = false;
          // let msg = JSON.parse(err._body)['message'];
          let msg = err.error.message;
          $.toast({
            text: msg,
            position: 'top-center',
            icon: 'error',
            showHideTransition: 'slide',
          });
        })
    }
  }

}
