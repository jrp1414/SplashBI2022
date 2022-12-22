import { Injectable, Type } from "@angular/core";
import { BikeComponent, CarComponent, EVComponent } from "./ads.component";

@Injectable({
    providedIn:'root'
})
export class AdService {
    getAds() {
        return [
            new AdItem(CarComponent, {name:"Tata Nexon", model:"test-001"}),
            new AdItem(BikeComponent, {name:"Honda Shine", model:"hnd-001"}),
            new AdItem(EVComponent, {name:"OLA E1", model:"ola-001"})
        ];
    }
}

export class AdItem {
    constructor(public component: Type<any>, public data: any) {

    }
}


export interface AdComponent{
    data:any;
}