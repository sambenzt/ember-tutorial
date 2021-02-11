import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked count = 5;
  
  @action
  change(amount)
  {
    this.count = this.count + amount;
  }

  get total() 
  {
    return this.count + this.args.multiple;
  }

  @action
  double()
  {
    this.args.updateMultiple(this.args.multiple * 2);
  }
}