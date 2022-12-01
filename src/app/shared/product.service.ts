import { EventEmitter, Injectable } from '@angular/core';
import { Product, products } from '../products/products';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn:"root"
})
export class ProductService {
  private products:Product[] = products;
  constructor(private logger:LoggerService) { }

  public getProducts():Product[]{
    return this.products;
  }

  public getProductDetails(pid:number):Product{
    var product = this.products.find(m=>m.id==pid);
    return product?product:new Product();
  }

  public sendData:EventEmitter<string> = new EventEmitter();  

}
