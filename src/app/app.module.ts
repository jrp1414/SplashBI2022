import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
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
    WebWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    })
  ],
  providers: [
    LoggerService,
    // ProductService
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

