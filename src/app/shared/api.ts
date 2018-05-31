
import { Injectable } from '@angular/core';

Injectable()
export class Globals {
    // Verified endpoints
    HOST_URL = 'https://stores.vogueafriq.com/api';
    LOGIN_URL = this.HOST_URL + '/login/';
    LOGOUT_URL = this.HOST_URL + '/logout/';
    STORES_URL = this.HOST_URL + '/stores/';
    CATEGORYS_URL = this.HOST_URL + '/stores/l1categories/';
    PRODUCT_TYPE_URL = this.HOST_URL + '/stores/l2categories/';
    SUB_CATEGORYS_URL = this.HOST_URL + '/stores/l3categories/';
    PRODUCTS_URL = this.HOST_URL + '/stores/products/';
    TAGS_URL = this.HOST_URL + '/stores/tags/';
    CURRENCY_URL = this.HOST_URL + '/stores/currencys/';
    COLORS_URL = this.HOST_URL + '/stores/colors/';
    SIZES_URL = this.HOST_URL + '/stores/sizes/';

    //Unverified endpoints
    ORDERS_URL = this.HOST_URL + '/admin/api/orders/';
    GENOTYPES_URL = this.HOST_URL + '/admin/api/genotypes/';
    GENDER_URL = this.HOST_URL + '/admin/api/genders/';
    CURRENT_PROFILE_URL = this.HOST_URL + '/admin/api/me/';
    ACCOUNT_ACTIVATION_URL = this.HOST_URL + '/admin/api/activate/';

    // PROFILE_DETAIL_URL = this.HOST_URL + '/client/api/profile_detail/';
    //FORGOT_PASS_URL = this.HOST_URL + '/client/api/forgot_password/';
    //RESET_PASS_URL = this.HOST_URL + '/client/api/reset_password/';
}
