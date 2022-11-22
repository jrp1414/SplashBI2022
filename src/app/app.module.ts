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

const routes:Routes = [
  {path:'products',component: ProductListComponent },
  {path:'product-details/:pid/:title',component: ProductDetailsComponent },
  {path:'string-interpolation', component: StringInterpolationComponent},
  {path:'property-binding', component: PropertyBindingComponent},
  {path:'event-binding', component:EventBindingComponent}, 
  {path:'twoway-binding', component:TwowayBindingComponent}
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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PrimengModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoggerService
    // ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

