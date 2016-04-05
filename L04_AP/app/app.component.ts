import {Component} from 'angular2/core';
import {Pizza} from './pizza';
import {PIZZAS} from './data';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {

  private pizzas: Pizza[];

  constructor() {
    this.pizzas = PIZZAS;
  }
}
