import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {RestoreService} from '../../../common/restore.service';
import {Pizza} from '../../domain/pizza';

@Component({
  selector: 'pizza-edit',
  templateUrl: 'app/pizza/components/pizzaEdit/pizzaEdit.component.html',
  styleUrls: ['app/pizza/components/pizzaEdit/pizzaEdit.component.css'],
  providers: [RestoreService]
})
export class PizzaEditComponent {

  @Output()
  private canceled = new EventEmitter<Pizza>();
  @Output()
  private saved = new EventEmitter<Pizza>();

  constructor(private restoreService: RestoreService<Pizza>) { }

  @Input()
  set pizza(pizza: Pizza) {
    this.restoreService.setItem(pizza);
  }
  get pizza() {
    return this.restoreService.getItem();
  }

  onSaved() {
    this.saved.emit(this.restoreService.getItem());
  }

  onCanceled() {
    this.pizza = this.restoreService.restoreItem();
    this.canceled.emit(this.pizza);
  }
}
