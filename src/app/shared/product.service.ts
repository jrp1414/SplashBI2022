import { EventEmitter, Injectable } from '@angular/core';

export class ProductService {
  constructor() { }

  public sendData:EventEmitter<string> = new EventEmitter();

  

}
