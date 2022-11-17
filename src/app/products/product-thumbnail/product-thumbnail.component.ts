import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: [
  ]
})
export class ProductThumbnailComponent implements OnInit {
  @Input("p") product:any;
  @Output("sd") send:EventEmitter<string> = new EventEmitter(); 
  constructor() { }
  currentDate:Date = new Date();
  ngOnInit(): void {
  }

  SendToParent(product:any){
    this.send.emit(product.title);
  }

}
