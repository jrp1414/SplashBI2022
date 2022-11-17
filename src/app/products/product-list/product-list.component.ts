import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {
  productsList:any[]=products;
  filterText:string="";
  constructor() { }

  ngOnInit(): void {
  }

  received(data:any){
    console.log(data);
  }

  AddProd(){
    
  }

}
