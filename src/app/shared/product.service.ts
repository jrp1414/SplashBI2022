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
    return this.http.get(`${environment.baseUrl}/GetProducts`);
  }

  public getProductTypes(): Observable<any> {
    // return this.products;  
    return this.http.get(`${environment.baseUrl}/GetTypes`);
  }

  public getProductDetails(pid: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/GetProduct?productId=${pid}`);
  }

  public sendData: EventEmitter<string> = new EventEmitter();

}
