import {Component, OnInit, Inject} from 'angular2/core';

import {EditItem} from '../common/editItem';
import {NavigationService} from '../common/navigation.service';
import {PizzaService, PIZZA_SERVICE} from './service/pizza.service';
import {Pizza} from './domain/pizza';
import {PizzaInfoComponent} from './components/pizzaInfo/pizzaInfo.component';
import {PizzaEditComponent} from './components/pizzaEdit/pizzaEdit.component';

@Component({
  selector: 'pizza-list',
  templateUrl: 'app/pizza/pizzaList.component.html',
  styleUrls: ['app/pizza/pizzaList.component.css'],
  directives: [PizzaInfoComponent, PizzaEditComponent]
})
export class PizzaListComponent implements OnInit {

  private pizzas: EditItem<Pizza>[];

  constructor(
    @Inject(PIZZA_SERVICE)
    private pizzaService: PizzaService,
    private navigationService: NavigationService) {
  }

  public goToPizza(pizza: Pizza) {
    this.navigationService.openPizza(pizza._id);
  }

  public ngOnInit() {
    this.pizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = pizzas.map(item => new EditItem(item));
      });
  }

  onSaved(editItem: EditItem<Pizza>, updatedPizza: Pizza) {
    editItem.item = updatedPizza;
    editItem.editing = false;
  }

  onCanceled(editItem: EditItem<Pizza>) {
    editItem.editing = false;
  }
}
