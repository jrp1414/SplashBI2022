import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggerService } from 'src/app/shared/logger.service';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: [
    `
    .green{
      background-color:green;
      color:yellow;
    }
    .red{
      background-color:red;
      color:white;
    }
    .bold{
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-style: italic;
}
    `
  ]
})
export class ProductThumbnailComponent implements OnInit {
  @Input("p") product: any;
  @Output("sd") send: EventEmitter<string> = new EventEmitter();
  // logger:LoggerService = new LoggerService();
  constructor(private logger:LoggerService,private ps:ProductService) { 

  }
  currentDate: Date = new Date();
  ngOnInit(): void {
  }

  SendToParent(product: any) {
    // this.logger.log(`Sending ${product.title} to Parent`);
    this.ps.sendData.emit(product.title);
    // this.send.emit(product.title);
  }

  getStyles(product: any) {
    if (product.rating < 3) {
      return { backgroundColor: 'maroon', color: 'white' };
    }
    return { backgroundColor: 'chartreuse', color: 'blue' }
  }

  getClases(product: any) {
    if (product.rating < 3) {
      return "red";
    }
    // return "green bold";
    return ["green","bold"];
  }

}
