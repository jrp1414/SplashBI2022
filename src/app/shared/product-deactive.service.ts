import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { EditProductComponent } from '../products/edit-product/edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDeactiveGuard implements CanDeactivate<EditProductComponent> {

  constructor(private confirm: ConfirmationService,private router:Router) { }
  canDeactivate(component: EditProductComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    if (this.router.getCurrentNavigation()?.extras?.state?.["bypassFormGuard"]) {
      return true;
    }
    if (component.productForm.dirty) {
      return confirm("Are you sure that you want to Navigate away and loose your changes?");
    }
    return true;
    // this.confirm.confirm({
    //   message: 'Are you sure that you want to Navigate away and loose your changes?',
    //   accept: () => {
    //     return true;
    //   },
    //   reject: () => {
    //     return false;
    //   }
    // }); 
  }

}
