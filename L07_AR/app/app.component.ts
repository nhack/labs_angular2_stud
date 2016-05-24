import {Component, ViewEncapsulation, OnInit, Inject, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {PizzaComponent} from './pizza/pizza.component';
import {Pizza} from './pizza/domain/pizza';
import {PizzaService, PIZZA_SERVICE} from './pizza/service/pizza.service';
import {PizzaRestService} from './pizza/service/pizzaRest.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [PizzaComponent],
  providers: [HTTP_PROVIDERS,
    provide(PIZZA_SERVICE, { useClass: PizzaRestService })]
})
export class AppComponent implements OnInit {

  private pizzas: Pizza[];

  constructor(
    @Inject(PIZZA_SERVICE)
    private pizzaService: PizzaService) { }

  public ngOnInit() {
    this.pizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = pizzas;
      });
  }
}
