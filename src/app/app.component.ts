import { Component } from '@angular/core';
import { ProductService } from './shared/product.service';

@Component({
  // selector: 'app-root',
  // selector: 'main-root',
  // selector: '[app-root]',
  selector: '.app-root',
  // template:"<h1>Hello World</h1><h2>INline template example</h2>",
  // template:"<h1>Hello World</h1>"+
  // "<h2>INline template example</h2>",
  // template:`<h1>Hello World</h1>
  //           <h3>Multiline HTML </h3>`,
  templateUrl: "./app.component.html",
  // styles: [
  //   `div{
  //     background-color:yellow;
  //   }`
  // ]
  styleUrls: [
    "./app.component.css",
    "./app2.component.css"
  ],
  providers: [
    ProductService
  ]
})
export class AppComponent {
  title = 'SplashBI2022';
}
