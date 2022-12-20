import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {SplashbiLibModule} from 'splashbi-lib';
import {
  Routes, AppComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent,
  TwowayBindingComponent, MenuComponent, ErrorComponent, ObservablesComponent, NavComponent, DashboardComponent,
  PrimengModule, MaterialModule, LoggerService,
  MessageService, ConfirmationService
} from "./index";
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent, ContentProjectionComponent } from './content-projection/content-projection.component';
import { AppRoutingModule } from './app-routing.module';

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
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PrimengModule,
    MaterialModule,
    SplashbiLibModule,
    HttpClientModule,
    AppRoutingModule
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

