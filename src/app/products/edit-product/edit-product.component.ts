import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styles: [
  ]
})
export class EditProductComponent implements OnInit {
  productList:any[]= [];
  types:string[]=[];
  productForm: FormGroup = new FormGroup({
    title:new FormControl(),
    type:new FormControl()
  });;

  constructor(private ps:ProductService) { 
    this.productList = this.ps.getProducts();
    this.types = [...new Set(this.productList.map(m=>m.type))];  
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.productForm.value);
  }

}
