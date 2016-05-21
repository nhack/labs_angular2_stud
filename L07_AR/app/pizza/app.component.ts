import {Component, ViewEncapsulation, OnInit, Inject, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {TabsComponent} from './components/tabs/tabs.component';
import {Pizza} from './domain/pizza';
import {PizzaService, PIZZA_SERVICE} from './service/pizza.service';
import {PizzaRestService} from './service/pizzaRest.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/pizza/app.component.html',
  styleUrls: ['app/pizza/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TabsComponent],
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
