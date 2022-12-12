import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, products } from '../products/products';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: "root"
})
export class ProductService {

  private products!: Product[];
  constructor(private logger: LoggerService, private http: HttpClient) { }

  public getProducts(): Observable<any> {
    // return this.products;  
    return this.http.get(`${environment.baseUrl}GetProducts`);
  }

  public getProductDetails(pid: number): Product {
    var product = this.products.find(m => m.id == pid);
    return product ? product : new Product();
  }

  public sendData: EventEmitter<string> = new EventEmitter();

}
