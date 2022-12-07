import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {
  Routes, AppComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent,
  TwowayBindingComponent, ShortenPipe, FilterPipe, BasicHighlightDirective, BetterHighlightDirective,
  UnlessDirective, MenuComponent, ErrorComponent, ObservablesComponent, NavComponent, DashboardComponent,
  PrimengModule, MaterialModule, LoggerService,
  MessageService, ConfirmationService
} from "./index";


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
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
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
    MaterialModule
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

