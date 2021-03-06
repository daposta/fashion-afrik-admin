import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from './pipes/filter.pipe';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { NoAuthGuardService as NoAuthGuard } from './auth/no-auth-guard.service';

import { Globals } from './shared/api';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { OrderListingComponent } from './components/order-listing/order-listing.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryListingComponent } from './components/inventory-listing/inventory-listing.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomersListingComponent } from './components/customers-listing/customers-listing.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { InventoryDetailComponent } from './components/inventory-detail/inventory-detail.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PaymentReportsComponent } from './components/payment-reports/payment-reports.component';
import { SalesReportsComponent } from './components/sales-reports/sales-reports.component';
import { InventoryReportsComponent } from './components/inventory-reports/inventory-reports.component';
import { CategoryListingComponent } from './components/category-listing/category-listing.component';
import { AccountActivationComponent } from './components/account-activation/account-activation.component';
import { NewProductTypeComponent } from './components/new-product-type/new-product-type.component';
import { ProductTypeListingComponent } from './components/product-type-listing/product-type-listing.component';
import { ProductTypeDetailComponent } from './components/product-type-detail/product-type-detail.component';
import { SubCategoryDetailComponent } from './components/sub-category-detail/sub-category-detail.component';
import { SubCategoryListingComponent } from './components/sub-category-listing/sub-category-listing.component';
import { NewSubCategoryComponent } from './components/new-sub-category/new-sub-category.component';
import { MerchantDetailComponent } from './components/merchant-detail/merchant-detail.component';
import { MerchantListingComponent } from './components/merchant-listing/merchant-listing.component';
import { TagsListingComponent } from './components/tags-listing/tags-listing.component';
import { TagsDetailComponent } from './components/tags-detail/tags-detail.component';
import { NewTagComponent } from './components/new-tag/new-tag.component';




const appRoutes: Routes = [

  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'activate/:uid/:token', component: AccountActivationComponent, canActivate: [NoAuthGuard] },
  { path: 'products', component: ProductListingComponent, canActivate: [AuthGuard] },

  { path: 'categorys', component: CategoryListingComponent, canActivate: [AuthGuard] },
  { path: 'new-category', component: NewCategoryComponent, canActivate: [AuthGuard] },

  { path: 'product-types', component: ProductTypeListingComponent, canActivate: [AuthGuard] },
  { path: 'new-product-type', component: NewProductTypeComponent, canActivate: [AuthGuard] },
  { path: 'product-types/:id', component: ProductTypeDetailComponent, canActivate: [AuthGuard] },

  { path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrderListingComponent, canActivate: [AuthGuard] },
  { path: 'order/detail', component: OrderDetailComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuard] },
  { path: 'categorys', component: OrderListingComponent, canActivate: [AuthGuard] },
  { path: 'new-category', component: NewCategoryComponent, canActivate: [AuthGuard] },
  { path: 'inventory', component: InventoryListingComponent, canActivate: [AuthGuard] },
  { path: 'inventory/detail', component: InventoryDetailComponent, canActivate: [AuthGuard] },
  { path: 'payment-reports', component: PaymentReportsComponent, canActivate: [AuthGuard] },
  { path: 'sales-reports', component: SalesReportsComponent, canActivate: [AuthGuard] },
  { path: 'inventory-reports', component: InventoryReportsComponent, canActivate: [AuthGuard] },

  { path: 'sub-categorys', component: SubCategoryListingComponent, canActivate: [AuthGuard] },
  { path: 'new-sub-category', component: NewSubCategoryComponent, canActivate: [AuthGuard] },
  { path: 'sub-categorys/:id', component: SubCategoryDetailComponent, canActivate: [AuthGuard] },

  { path: 'merchants', component: MerchantListingComponent, canActivate: [AuthGuard] },
  { path: 'merchants/:id', component: MerchantDetailComponent, canActivate: [AuthGuard] },

  { path: 'tags', component: TagsListingComponent, canActivate: [AuthGuard] },
  { path: 'tags/:id', component: TagsDetailComponent, canActivate: [AuthGuard] },
  { path: 'new-tag', component: NewTagComponent, canActivate: [AuthGuard] },


]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductListingComponent,
    EditProductComponent,
    OrderListingComponent,
    OrderDetailComponent,
    ProductDetailComponent,
    SettingsComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    NewCategoryComponent,
    CategoryDetailComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    InventoryListingComponent,
    HeaderComponent,
    CustomersListingComponent,
    CustomerDetailComponent,
    InventoryDetailComponent,
    MyProfileComponent,
    PaymentReportsComponent,
    SalesReportsComponent,
    InventoryReportsComponent,
    CategoryListingComponent,
    AccountActivationComponent,
    NewProductTypeComponent,
    ProductTypeListingComponent,
    ProductTypeDetailComponent,
    SubCategoryDetailComponent,
    SubCategoryListingComponent,
    NewSubCategoryComponent,
    MerchantDetailComponent,
    MerchantListingComponent,
    TagsListingComponent,
    TagsDetailComponent,
    NewTagComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes, {}),
  ],
  providers: [AuthGuard, NoAuthGuard, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
