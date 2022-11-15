import { Component } from "@angular/core";

@Component({
    selector: 'app-si',
    templateUrl: "./string-interpolation.component.html"
})
export class StringInterpolationComponent {
    greetingMessage: string = "String Interpolation";
    firstName: string = "Ram";
    lastName: string = "Sharma";
    angularLogo="https://angular.io/assets/images/logos/angular/angular.png";
    constructor() {
        setTimeout(() => {
            this.greetingMessage = "Updated SI Examples";
        }, 4000);
    }

    getFullName(): string {
        // return this.firstName + " " + this.lastName;
        return `${this.firstName} ${this.lastName}`;
    }
}