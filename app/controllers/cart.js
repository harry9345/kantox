import Controller from "@ember/controller";

export default class CartController extends Controller {
  get subtotal() {
    return this.model.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
  }

  total = 0;
  tax = 0;
}
