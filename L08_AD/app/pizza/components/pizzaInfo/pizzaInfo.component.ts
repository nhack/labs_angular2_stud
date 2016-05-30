import {Component, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Pizza} from '../../domain/pizza';

@Component({
  selector: 'pizza-info',
  templateUrl: 'app/pizza/components/pizzaInfo/pizzaInfo.component.html',
  styleUrls: ['app/pizza/components/pizzaInfo/pizzaInfo.component.css'],
})
export class PizzaInfoComponent {

  @Input()
  private pizza: Pizza;
}
