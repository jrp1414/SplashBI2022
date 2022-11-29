import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: [
  ]
})
export class AddProductComponent implements OnInit {
  types:string[]= [];
  prodList:any[] = products;
  constructor() {
    this.types = [...new Set(this.prodList.map(m=>m.type))];    
   }

  ngOnInit(): void {
  }

  onSubmit(ap:any){
    console.log(ap);
  }

}
