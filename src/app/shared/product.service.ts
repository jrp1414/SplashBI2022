import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, products } from '../products/products';
import { LocalStorageService } from './localstorage.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: "root"
})
export class ProductService {

  private products!: Product[];
  constructor(private logger: LoggerService, private http: HttpClient, private local: LocalStorageService) { }

  public getProducts(): Observable<any> {
    // var token = this.local.Get();
    // let options = {
    //   headers: new HttpHeaders().set('Authorization', `${token.token_type} ${token.token}`)
    // };
    return this.http.get(`${environment.baseUrl}/GetProducts`);
  }

  public getProductTypes(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/GetTypes`);
  }

  public getProductDetails(pid: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/GetProduct?productId=${pid}`);
  }

  public AddProduct(prod: Product): Observable<any> {
    return this.http.post(`${environment.baseUrl}/AddProduct`, prod);
  }

  public UpdateProductDetails(prod: Product): Observable<any> {
    return this.http.put(`${environment.baseUrl}/UpdateProduct`, prod);
  }

  public DeleteProduct(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/DeleteProduct?productId=${id}`);
  }

  public sendData: EventEmitter<string> = new EventEmitter();
  public refreshData: EventEmitter<boolean> = new EventEmitter();

}
