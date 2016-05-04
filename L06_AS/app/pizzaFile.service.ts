import {Injectable} from 'angular2/core';

import {Pizza} from './pizza';
import {PIZZAS} from './data';

@Injectable()
export class PizzaFileService{
  getPizzas():Pizza[]{
    return PIZZAS;
  }
}
