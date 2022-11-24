import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductThumbnailComponent } from './products/product-thumbnail/product-thumbnail.component';
import { PrimengModule } from './ui-libs/primeng.module';
import { ShortenPipe } from './shared/shorten.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { BasicHighlightDirective } from './shared/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/better-highlight.directive';
import { UnlessDirective } from './shared/unless.directive';
import { LoggerService } from './shared/logger.service';
import { ProductService } from './shared/product.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { ProductGuardService } from './shared/product-guard.service';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ObservablesComponent } from './observables/observables.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './ui-libs/material.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

const routes:Routes = [
  {path:'products',component: ProductListComponent, children:[
    {path:'add',component: AddProductComponent }, 
    {path:':pid/edit',component: EditProductComponent, canActivate:[ProductGuardService] },
    {path:':pid',component: ProductDetailsComponent, canActivate:[ProductGuardService] }    
  ] },
  {path:'string-interpolation', component: StringInterpolationComponent},
  {path:'property-binding', component: PropertyBindingComponent},
  {path:'event-binding', component:EventBindingComponent}, 
  {path:'twoway-binding', component:TwowayBindingComponent},
  {path:'error', component:ErrorComponent},
  {path:'obs', component:ObservablesComponent},
  {path:'home', component:DashboardComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', redirectTo:'home'}
];


@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ProductDetailsComponent,
    MenuComponent,
    ErrorComponent,
    AddProductComponent,
    EditProductComponent,
    ObservablesComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    PrimengModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    LoggerService
    // ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

