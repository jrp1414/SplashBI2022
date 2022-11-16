import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: [
  ]
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product:any;
  constructor() { }
  currentDate:Date = new Date();
  ngOnInit(): void {
  }

}
