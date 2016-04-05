import {Component} from 'angular2/core';
import {Pizza} from './pizza';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {

  private pizza: Pizza;

  constructor() {
    this.pizza = {
      name: '4 STAGIONI',
      price: 27.5,
      weight: 550,
      ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare',
      canPurchase: true,
      soldOut: false
    }
  }
}
