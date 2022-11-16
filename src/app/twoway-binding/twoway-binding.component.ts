import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twb',
  templateUrl: './twoway-binding.component.html',
  styles: [
  ]
})
export class TwowayBindingComponent {
  constructor() { }
  oneWayMessage:string="";
  onewayKeyUp(data:any){
    this.oneWayMessage = data.target.value;
  }
  onewayTest(){
    this.oneWayMessage = "Button Clicked";
  }

  twowayMessage:string="";
  twowayTest(){
    this.twowayMessage ="Button Clicked" ;
    
  }

  twowayChange(data:string){
    this.twowayMessage = data.toUpperCase();
  }
}
