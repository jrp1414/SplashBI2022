import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/shared/logger.service';
import { ProductService } from 'src/app/shared/product.service';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ],
  // providers:[
  //  ProductService 
  // ]
})
export class ProductListComponent implements OnInit {
  productsList: any[] = [];
  filterText: string = "";
  constructor(private ps: ProductService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data=>{
      this.productsList = data;
    });
    this.ps.sendData.subscribe((data: string) => {
      this.logger.log(`Recevied in Products List:  ${data}`);
    });
  }

  received(data: any) {
    console.log(data);
  }

  AddProd() {
    this.productsList.push({
      "id": 1,
      "title": "Brown eggs Test",
      "type": "dairy",
      "description": "Raw organic brown eggs in a basket",
      "availibility": false,
      "safeFor": 1,
      "qualityScore": 1,
      "tags": [],
      "sellers": [
        {
          "AddLine1": "",
          "AddLine2": "",
          "AddLine3": "",
          "City": "",
          "State": ""
        }
      ],
      "price": 2.1,
      "rating": 4,
      "imageurl": "https://previews.123rf.com/images/bhofack2/bhofack21502/bhofack2150200615/37073865-raw-organic-brown-eggs-in-a-basket.jpg"
    });
  }

}
