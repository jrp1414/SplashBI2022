

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ad-car',
    template: `
    <h1>Car Advertisement</h1>
    <h2>{{data.name}} {{data.model}}</h2>
    `
})

export class CarComponent {
    @Input() data: any;
    constructor() { }
}


@Component({
    selector: 'ad-bike',
    template: `
    <h1>Bike Advertisement</h1>
    <h2>{{data.name}} {{data.model}}</h2>
    `
})

export class BikeComponent implements OnInit {
    @Input() data: any;
    constructor() { }

    ngOnInit() { }
}


@Component({
    selector: 'ad-EV',
    template: `
    <h1>Electric Vehicle Advertisement</h1>
    <h2>{{data.name}} {{data.model}}</h2>
    `
})

export class EVComponent implements OnInit {
    @Input() data: any;
    constructor() { }

    ngOnInit() { }
}