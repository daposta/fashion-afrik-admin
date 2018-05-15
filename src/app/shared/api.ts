
import { Injectable } from '@angular/core';

Injectable()
export class Globals {
    HOST_URL = 'https://stores.vogueafriq.com/api';    // 'http://127.0.0.1:8000';
    LOGIN_URL = this.HOST_URL + '/admin/api/login/';
    LOGOUT_URL = this.HOST_URL + '/admin/api/logout/';
    CATEGORYS_URL = this.HOST_URL + '/admin/api/categorys/';
    PRODUCTS_URL = this.HOST_URL + '/admin/api/products/';
    ORDERS_URL = this.HOST_URL + '/admin/api/orders/';
    REGISTER_URL = this.HOST_URL + '/admin/api/register/';
    COLORS_URL = this.HOST_URL + '/admin/api/colors/';
    SIZES_URL = this.HOST_URL + '/admin/api/sizes/';
    CURRENCY_URL = this.HOST_URL + '/admin/api/currencys/';
    GENOTYPES_URL = this.HOST_URL + '/admin/api/genotypes/';
    GENDER_URL = this.HOST_URL + '/admin/api/genders/';
    PRODUCT_TYPE_URL = this.HOST_URL + '/admin/api/product_types/';
    CURRENT_PROFILE_URL = this.HOST_URL + '/admin/api/me/'; //current_profile
    // PROFILE_DETAIL_URL = this.HOST_URL + '/client/api/profile_detail/';
    //FORGOT_PASS_URL = this.HOST_URL + '/client/api/forgot_password/';
    //RESET_PASS_URL = this.HOST_URL + '/client/api/reset_password/';
    ACCOUNT_ACTIVATION_URL = this.HOST_URL + '/admin/api/activate/';
    SUB_CATEGORYS_URL = this.HOST_URL + '/admin/api/product_type_categorys/';
    MERCHANTS_URL = this.HOST_URL + '/admin/api/stores/';

}
