import {Component} from 'angular2/core';
import {TabsComponent} from './tabs.component';
import {Pizza} from './pizza';
import {PIZZAS} from './data';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [TabsComponent]
})
export class AppComponent {

  private pizzas: Pizza[];

  constructor() {
    this.pizzas = PIZZAS;
  }
}
