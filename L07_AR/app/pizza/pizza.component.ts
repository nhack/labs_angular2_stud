import {Component, Input} from 'angular2/core';

import {TabsComponent} from './components/tabs/tabs.component';
import {Pizza} from './domain/pizza';

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css'],
  directives: [TabsComponent]
})
export class PizzaComponent {

  @Input()
  private pizza: Pizza;
}
