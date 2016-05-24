import {Component, Input} from 'angular2/core';

@Component({
  selector: 'extras',
  templateUrl: 'app/pizza/components/extras/extras.component.html',
  styleUrls: ['app/pizza/components/extras/extras.component.css'],
})
export class ExtrasComponent {

  @Input()
  private extras: any;
}
