import {Injectable} from 'angular2/core';

import {Pizza} from './pizza';
import {PIZZAS} from './data';

@Injectable()
export class PizzaFileService {
  getPizzas():Promise<Pizza[]>{
    return Promise.resolve(PIZZAS);
  }
}
