import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";


export default class CartService extends Service {
  @tracked listItem = [];

  addItem(item) {
    const isItemExist = this.listItem.find((cartItem) => {
      return cartItem.code === item.code
    });

    if (isItemExist) {
      // green tea promo
      if (isItemExist.id === "GR1") {
        isItemExist.quantity += 2
      } else {
        isItemExist.quantity += 1
      }
    } else {
      if (!item.hasOwnProperty("quantity")) {
        if (item.code === 'GR1') {
          item.quantity = 2;
        } else {
          item.quantity = 1;
        }
      }
      this.listItem = [...this.listItem, item];
    }
  }

  removeItem(item) {
    const itemToRemove = this.listItem.find((cartItem) => cartItem.code === item.code);
    if (itemToRemove) {
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity--;
      } else {
        itemToRemove.quantity = 0;
        this.listItem = this.listItem.filter((cartItem) => cartItem.code !== item.code);
      }
    }
  }
}
