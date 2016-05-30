import {Component, Input, OnInit, Inject} from 'angular2/core';

import {NavigationService} from '../common/navigation.service';
import {PizzaService, PIZZA_SERVICE} from './service/pizza.service';
import {PizzaComponent} from './pizza.component';
import {Pizza} from './domain/pizza';

@Component({
  selector: 'pizza-list',
  templateUrl: 'app/pizza/pizzaList.component.html',
  styleUrls: ['app/pizza/pizzaList.component.css'],
  directives: [PizzaComponent]
})
export class PizzaListComponent implements OnInit {

  private pizzas: Pizza[];

  constructor(
    @Inject(PIZZA_SERVICE)
    private pizzaService: PizzaService,
    private navigationService: NavigationService) { }

  public goToPizza(pizza: Pizza) {
    this.navigationService.openPizza(pizza._id);
  }

  public ngOnInit() {
    this.pizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = pizzas;
      });
  }
}
