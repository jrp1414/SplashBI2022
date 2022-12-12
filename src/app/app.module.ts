import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SplashbiLibModule} from 'splashbi-lib';
import {
  Routes, AppComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent,
  TwowayBindingComponent, MenuComponent, ErrorComponent, ObservablesComponent, NavComponent, DashboardComponent,
  PrimengModule, MaterialModule, LoggerService,
  MessageService, ConfirmationService
} from "./index";
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'products', loadChildren: () => import("./products/products.module").then(m => m.ProductsModule) },
  { path: 'string-interpolation', component: StringInterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'twoway-binding', component: TwowayBindingComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'obs', component: ObservablesComponent },
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,    
    MenuComponent,
    ErrorComponent,
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
    SplashbiLibModule,
    HttpClientModule
  ],
  providers: [
    LoggerService,
    // ProductService
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

