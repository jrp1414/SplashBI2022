import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { EditProductComponent } from '../products/edit-product/edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDeactiveGuard implements CanDeactivate<EditProductComponent> {

  constructor(private confirm: ConfirmationService) { }
  canDeactivate(component: EditProductComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    if (!component.productForm.dirty) {
      return true;
    }
    return confirm("Are you sure that you want to Navigate away and loose your changes?");
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
