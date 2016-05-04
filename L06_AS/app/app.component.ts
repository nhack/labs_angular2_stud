import {Component, ViewEncapsulation} from 'angular2/core';

import {TabsComponent} from './tabs.component';
import {Pizza} from './pizza';
import {PizzaFileService} from './pizzaFile.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TabsComponent],
  providers: [PizzaFileService]
})
export class AppComponent {

  private pizzas: Pizza[];

  constructor(private pizzaService: PizzaFileService) {
    this.pizzas = pizzaService.getPizzas();
  }
}
