import {Component, Input} from 'angular2/core';
import {Pizza} from './pizza';

@Component({
  selector: 'tabs',
  templateUrl: 'app/tabs.component.html',
  styleUrls: ['app/tabs.component.css']
})
export class TabsComponent {

  @Input()
  private pizza: Pizza;

  private tab: number;

  constructor() {
    this.tab = 1;
  }

  public selectTab(tid: number) {
    this.tab = tid;
  }

  public isSelected(tid: number): boolean {
    return this.tab === tid;
  }
}
