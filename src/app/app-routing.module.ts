import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ObservablesComponent } from './observables/observables.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import("./products/products.module").then(m => m.ProductsModule) },
  { path: 'string-interpolation', component: StringInterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'twoway-binding', component: TwowayBindingComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'obs', component: ObservablesComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'cont-proj', component: ContentProjectionComponent }, 
  { path: 'dynamic', component: DynamicComponent },
  { path: 'webworker', component: WebWorkerComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
