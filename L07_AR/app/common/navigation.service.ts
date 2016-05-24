import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()
export class NavigationService {

  constructor(private _router: Router) { }

  openPizza(id: string) {
    this._router.navigate(['Pizza', { id: id }]);
  }

  openPizzas() {
    this._router.navigate(['Pizzas']);
  }
}
