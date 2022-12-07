import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import {
  ProductListComponent,AddProductComponent,EditProductComponent, ProductGuardService,
  ProductDetailsComponent,ProductThumbnailComponent, ProductDeactiveGuard
} from "./product.index";
import { MaterialModule } from '../ui-libs/material.module';
import { PrimengModule } from '../ui-libs/primeng.module';


//products
const routes:Routes=[
  {path:'',component: ProductListComponent, children:[
    {path:'add',component: AddProductComponent }, 
    {path:':pid/edit',component: EditProductComponent, canActivate:[ProductGuardService], canDeactivate:[ProductDeactiveGuard] },
    {path:':pid',component: ProductDetailsComponent, canActivate:[ProductGuardService] }    
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
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
