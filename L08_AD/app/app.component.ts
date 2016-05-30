import {Component, ViewEncapsulation, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {NavigationService} from './common/navigation.service';
import {PizzaComponent} from './pizza/pizza.component';
import {PizzaListComponent} from './pizza/pizzaList.component';
import {PIZZA_SERVICE} from './pizza/service/pizza.service';
import {PizzaRestService} from './pizza/service/pizzaRest.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, PizzaListComponent],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, NavigationService,
    provide(PIZZA_SERVICE, { useClass: PizzaRestService })]
})
@RouteConfig([
  {
    path: '/',
    name: 'Pizzas',
    component: PizzaListComponent,
    useAsDefault: true
  },
  {
    path: '/pizza/:id',
    name: 'Pizza',
    component: PizzaComponent
  }
])
export class AppComponent {
}
