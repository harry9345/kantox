import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class GeneralContainerComponent extends Component {
  @service cart;

  get itemsCount() {
    return this.cart.listItem.reduce((sum, item) => {
      return (sum += item.quantity);
    }, 0);
  }
}
