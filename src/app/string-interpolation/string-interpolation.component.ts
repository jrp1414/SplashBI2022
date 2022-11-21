import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../shared/logger.service";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-si',
    templateUrl: "./string-interpolation.component.html",
    // providers:[
    //     ProductService
    // ]
})
export class StringInterpolationComponent implements OnInit{
    greetingMessage: string = "String Interpolation";
    firstName: string = "Ram";
    lastName: string = "Sharma";
    angularLogo="https://angular.io/assets/images/logos/angular/angular.png";
    constructor(private ps:ProductService, private logger:LoggerService) {
        setTimeout(() => {
            this.greetingMessage = "Updated SI Examples";
        }, 4000);
    }
    ngOnInit(): void {
        this.ps.sendData.subscribe((data:string)=>{
            this.logger.log(`Recevied in SI Component ${data}`);
          });
    }

    getFullName(): string {
        // return this.firstName + " " + this.lastName;
        return `${this.firstName} ${this.lastName}`;
    }
}