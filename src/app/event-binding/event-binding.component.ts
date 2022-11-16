import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: [
  ]
})
export class EventBindingComponent {

  message:string="";
  constructor() { }

  buttonClicked(){
    this.message = "Welcome to Angular";
  }

  keyUpCalled(data:any){
    // console.log(data);
    this.message = data.target.value;
  }

}
