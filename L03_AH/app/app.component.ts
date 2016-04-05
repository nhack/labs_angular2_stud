import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: ''
})
export class AppComponent {

    pizza;

    constructor() {
        this.pizza = {
            name: '4 STAGIONI',
            price: 27.5,
            weight: 550,
            ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare'
        }
    }
}
