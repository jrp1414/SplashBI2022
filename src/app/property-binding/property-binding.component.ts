import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './property-binding.component.html',
  styles: [
  ]
})
export class PropertyBindingComponent{

  angularLogo="https://angular.io/assets/images/logos/angular/angular.png";
  buttonDisabled:boolean=false;
  constructor() {

    setTimeout(() => {
      this.buttonDisabled = true;
    }, 4000);

   }


}
