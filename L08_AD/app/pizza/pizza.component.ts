import {Component, Input, Inject, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {TabsComponent} from './components/tabs/tabs.component';
import {PizzaService, PIZZA_SERVICE} from './service/pizza.service';
import {Pizza} from './domain/pizza';

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css'],
  directives: [TabsComponent]
})
export class PizzaComponent implements OnInit {

  private pizza: Pizza;

  constructor(
    @Inject(PIZZA_SERVICE)
    private pizzaService: PizzaService,
    private routeParams: RouteParams) { }

  ngOnInit() {
    this.pizzaService.getPizza(this.routeParams.get('id'))
      .then(pizza => {
        this.pizza = pizza
      });
  }
}
