import { EventEmitter, Injectable } from '@angular/core';
import { products } from '../products/products';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn:"root"
})
export class ProductService {
  private products:any[] = products;
  constructor(private logger:LoggerService) { }

  public getProducts():any[]{
    return this.products;
  }

  public getProductDetails(pid:number):any{
    return this.products.find(m=>m.id==pid);
  }

  public sendData:EventEmitter<string> = new EventEmitter();  

}
