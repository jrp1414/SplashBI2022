import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from '../products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styles: [
    `
    mat-slider {
      width: 300px;
    }
    `
  ]
})
export class EditProductComponent implements OnInit {
  productList: Product[];
  product?: Product;
  types: string[] = [];
  productForm: any;

  constructor(private ps: ProductService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.productList = this.ps.getProducts();
    this.types = [...new Set(this.productList.map(m => m.type))];
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.product = this.ps.getProductDetails(p["pid"]);
      this.productForm = this.fb.group({
        title: this.product.title,
        type: this.product.type,
        description: this.product.description,
        availibility: this.product.availibility,
        safeFor: this.product.safeFor,
        qualityScore: this.product.qualityScore,
        price: this.product.price,
        rating: this.product.rating,
        imageUrl: this.product.imageurl
      });
    });

  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  formatLabel(value: number): string {
    return `${value}`;
  }

}
