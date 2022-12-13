import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {SplashbiLibModule} from 'splashbi-lib';

import {
  ProductListComponent,AddProductComponent,EditProductComponent, ProductGuardService,
  ProductDetailsComponent,ProductThumbnailComponent, ProductDeactiveGuard
} from "./product.index";
import { MaterialModule } from '../ui-libs/material.module';
import { PrimengModule } from '../ui-libs/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsResolver } from '../shared/products.resolver';
import { ProductDetailsResolver, ProductTypesResolver } from '../shared/product-details.resolver';


//products
const routes:Routes=[
  {path:'',component: ProductListComponent, resolve:{productsList:ProductsResolver}, children:[
    {path:'add',component: AddProductComponent }, 
    {path:':pid/edit',component: EditProductComponent, resolve:{prod:ProductDetailsResolver, types:ProductTypesResolver}, canActivate:[ProductGuardService], canDeactivate:[ProductDeactiveGuard] },
    {path:':pid',component: ProductDetailsComponent, resolve:{prod:ProductDetailsResolver}, canActivate:[ProductGuardService] }    
  ] },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductThumbnailComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    MaterialModule,
    SplashbiLibModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class ProductsModule { }
