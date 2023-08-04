import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class CartService extends Service {
  @tracked listItem = [];

  addItem(item) {
    const isItemExist = this.listItem.find((cartItem) => {
      return cartItem.code === item.code;
    });

    if (isItemExist) {
      if (isItemExist.id === "GR1") {
        isItemExist.quantity += 2;
      } else {
        isItemExist.quantity++;
      }
      isItemExist.discountedFigure = this.calculateDiscount(isItemExist);
    } else {
      /* eslint-disable no-prototype-builtins */
      if (!item.hasOwnProperty("quantity")) {
        if (item.code === "GR1") {
          item.quantity = 2;
        } else {
          item.quantity = 1;
        }
        item.discountedFigure = this.calculateDiscount(item);
      }
      this.listItem = [...this.listItem, item];
    }
  }

  removeItem(item) {
    const itemToRemove = this.listItem.find(
      (cartItem) => cartItem.code === item.code
    );
    if (itemToRemove) {
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity--;
        itemToRemove.discountedFigure = this.calculateDiscount(itemToRemove);
      } else {
        itemToRemove.quantity = 0;
        this.listItem = this.listItem.filter(
          (cartItem) => cartItem.code !== item.code
        );
      }
    }
  }

  calculateDiscount(item) {
    switch (item.code) {
      case "GR1":
        return Math.ceil(item.quantity / 2);
      case "SR1":
        if (item.quantity >= 3) {
          return 4.5;
        } else {
          return item.price;
        }
      case "CF1":
        if (item.quantity >= 3) {
          return (2 / 3) * item.price;
        } else {
          return item.price;
        }
      default:
        return 0;
    }
  }
}
