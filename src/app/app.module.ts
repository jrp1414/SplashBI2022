import { NgModule, isDevMode, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SplashbiLibModule } from 'splashbi-lib';
import {
  Routes, AppComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent,
  TwowayBindingComponent, MenuComponent, ErrorComponent, ObservablesComponent, NavComponent, DashboardComponent,
  PrimengModule, MaterialModule, LoggerService,
  MessageService, ConfirmationService
} from "./index";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChildComponent, ContentProjectionComponent } from './content-projection/content-projection.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CarComponent, BikeComponent, EVComponent } from './dynamic/ads.component';
import { AdBannerComponent } from './dynamic/ad-banner.component';
import { AdDirective } from './dynamic/ad.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ErrorInterceptor } from './shared/error.interceptor';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './shared/token.interceptor';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './ngrxstore/cart.reducer';
import { metaReducers } from './ngrxstore/meta.reducer';

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
    DashboardComponent,
    ContentProjectionComponent,
    ChildComponent,
    DynamicComponent,
    CarComponent,
    BikeComponent,
    EVComponent,
    AdBannerComponent,
    AdDirective,
    WebWorkerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PrimengModule,
    MaterialModule,
    SplashbiLibModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot({cartR:cartReducer}, {metaReducers})
  ],
  providers: [
    LoggerService,
    // ProductService
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector:Injector;
  
  constructor(private injector: Injector) {
    AppModule.injector = injector;    
  }
}

