import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  constructor(private route:ActivatedRoute, private ps:ProductService) { }

  ngOnInit(): void {
    this.product = this.ps.getProductDetails(this.route.snapshot.params["pid"]);    
  }

}
