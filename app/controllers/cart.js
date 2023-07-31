import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class CartController extends Controller {
  @service cart;
  @tracked isDetailsVisible = false;

  get subtotal() {
    return this.cart.listItem.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  get totalQuantity() {
    return this.cart.listItem.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
  }

  get discount() {
    return this.cart.listItem.reduce((discount, item) => {
      if (item.code === "GR1") {
        return (
          discount +
          item.price * item.quantity -
          item.discountedPrice * item.price
        );
      } else if (item.quantity >= 3) {
        return discount + (item.price - item.discountedPrice) * item.quantity;
      }
      return discount;
    }, 0);
  }

  get totalPayable() {
    return this.subtotal - this.discount;
  }

  shippingCost = 0;

  @action
  toggleDetails() {
    this.isDetailsVisible = !this.isDetailsVisible;
  }

  get calculatedPrices() {
    return this.cart.listItem.map((item) => ({
      quantity: item.quantity,
      name: item.name,
      calculatedPrice: item.price * item.quantity,
    }));
  }
}
