import {Injectable} from 'angular2/core';

import {PizzaService} from './pizza.service';
import {Pizza} from '../domain/pizza';
import {Review} from '../domain/review';
import {PIZZAS} from '../domain/data';

@Injectable()
export class PizzaFileService implements PizzaService {

  getPizzas(): Promise<Pizza[]> {
    return Promise.resolve(PIZZAS);
  }

  getPizza(id: string): Promise<Pizza> {
    PIZZAS.forEach(pizza => {
      if (pizza._id === id) {
        return Promise.resolve(pizza);
      }
    });
    return Promise.resolve(null);
  }

  addReview(pizza: Pizza, review: Review): Promise<Pizza> {
    throw new Error('addReview not supported for PizzaFileService');
  }
}
