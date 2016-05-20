import {Pizza} from '../domain/pizza';
import {OpaqueToken} from 'angular2/core';

export interface PizzaService{
  getPizzas():Promise<Pizza[]>;
}

export let PIZZA_SERVICE = new OpaqueToken('app.pizza.service');
