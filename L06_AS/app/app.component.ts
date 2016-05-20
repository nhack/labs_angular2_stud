import {Component, ViewEncapsulation, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {TabsComponent} from './tabs.component';
import {Pizza} from './pizza';
import {PizzaRestService} from './pizzaRest.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TabsComponent],
  providers: [HTTP_PROVIDERS, PizzaRestService]
})
export class AppComponent implements OnInit {

  private pizzas: Pizza[];

  constructor(private pizzaService: PizzaRestService) { }

  public ngOnInit() {
    this.pizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = pizzas;
      });
  }
}
