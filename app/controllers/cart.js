import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default class CartController extends Controller {
  @service cart;

  get subtotal() {
    return this.cart.listItem.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
  }

  total = 0;
  tax = 0;
}
