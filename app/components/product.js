import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ProductComponent extends Component {
  @service cart;

  @action
  addToCart(item) {
    this.cart.addItem(item);
  }

  @action
  removeFromCart(item) {
    this.cart.removeItem(item);
  }
}
