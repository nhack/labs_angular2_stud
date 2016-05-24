import {Component, Input, Inject} from 'angular2/core';

import {ReviewsComponent} from '../reviews/reviews.component';
import {IngredientsComponent} from '../ingredients/ingredients.component';
import {ExtrasComponent} from '../extras/extras.component';
import {Pizza} from '../../domain/pizza';
import {Review} from '../../domain/review';
import {PizzaService, PIZZA_SERVICE} from '../../service/pizza.service';

@Component({
  selector: 'tabs',
  templateUrl: 'app/pizza/components/tabs/tabs.component.html',
  styleUrls: ['app/pizza/components/tabs/tabs.component.css'],
  directives: [ReviewsComponent, IngredientsComponent, ExtrasComponent]
})
export class TabsComponent {

  @Input()
  private pizza: Pizza;

  private tab: number;

  constructor(
    @Inject(PIZZA_SERVICE)
    private pizzaService: PizzaService) {
    this.tab = 1;
  }

  public selectTab(tid: number) {
    this.tab = tid;
  }

  public isSelected(tid: number): boolean {
    return this.tab === tid;
  }

  public addReview(review: Review) {
    this.pizzaService.addReview(this.pizza, review)
      .then(() => this.pizza.reviews.push(review));
  }
}
