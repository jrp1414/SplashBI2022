import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "../products/products";
import { ProductService } from "./product.service";

@Injectable({
    providedIn:'root'
})
export class ProductDetailsResolver implements Resolve<Product> {
    constructor(private ps:ProductService) {        
    }

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
        // console.log(route.queryParams["title"]);
        // console.log(route.queryParams["rating"]);
        console.log(route.fragment);
        // console.log(route.params["title"]);
        // console.log(route.params["rating"]);
        // console.log(route.paramMap.get("title"));
        // console.log(route.paramMap.get("rating"));
        return this.ps.getProductDetails(route.params["pid"]);
    }
}