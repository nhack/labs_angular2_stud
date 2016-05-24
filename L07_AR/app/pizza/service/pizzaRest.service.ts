import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

import {RestService} from '../../common/rest.service';
import {PizzaService} from './pizza.service';
import {Pizza} from '../domain/pizza';
import {Review} from '../domain/review';
import {PIZZAS} from '../domain/data';

@Injectable()
export class PizzaRestService extends RestService implements PizzaService {

  private _baseUrl: string = "http://pizza-store.herokuapp.com/api/pizzas";
  //private _baseUrl: string = "http://localhost:9000/api/pizzas";
  private _url: null;

  constructor(private _http: Http) {
    super();
  }

  protected get http(): Http {
    return this._http;
  }

  protected get url(): string {
    return this._url;
  }

  getPizzas(): Promise<Pizza[]> {
    this._url = this._baseUrl;
    return this.getData<Pizza[]>();
  }

  getPizza(id: string): Promise<Pizza> {
    this._url = this._baseUrl + '/' + id;
    return this.getData<Pizza>();
  }

  addReview(pizza: Pizza, review: Review): Promise<Pizza> {
    this._url = this._baseUrl + '/addReview/' + pizza._id;
    return this.putData<Pizza>(JSON.stringify(review));
  }
}
