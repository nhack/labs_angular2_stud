import {Component, Input} from 'angular2/core';

@Component({
  selector: 'ingredients',
  templateUrl: 'app/pizza/components/ingredients/ingredients.component.html',
  styleUrls: ['app/pizza/components/ingredients/ingredients.component.css'],
})
export class IngredientsComponent {

  @Input()
  private ingredients: string;
}
