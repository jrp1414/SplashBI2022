import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { LoggerService } from 'src/app/shared/logger.service';
import { ProductService } from 'src/app/shared/product.service';
import { Product, products } from '../products';

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
  constructor(private ps: ProductService, private logger: LoggerService, private route: ActivatedRoute, private confirm: ConfirmationService) { }

  ngOnInit(): void {
    // this.ps.getProducts().subscribe(data=>{
    //   this.productsList = data; 
    // });
    this.route.data.subscribe(data => {
      // console.log(data["productsList"]);
      this.productsList = data["productsList"] as any[];
    });

    this.ps.sendData.subscribe((data: string) => {
      this.logger.log(`Recevied in Products List:  ${data}`);
    });
    this.ps.refreshData.subscribe(data => {
      if (data) {
        this.RefreshProducts();
      }
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

  RemoveProduct(product:Product) {
    this.confirm.confirm({
      message: `Are you sure to delete ${product.title}?`,
      accept: () => {
        this.ps.DeleteProduct(product.id).subscribe(data => {
          this.RefreshProducts();
        });
      },
      reject: () => {
        return false;
      }
    });

  }

  RefreshProducts() {
    this.ps.getProducts().subscribe(products => {
      this.productsList = products;
    });
  }

}
