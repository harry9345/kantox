import { module, test } from "qunit";
import { setupTest } from "kshop-app/tests/helpers";

module("Unit | Controller | cart", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    let controller = this.owner.lookup("controller:cart");

    controller.cart.listItem = [
      { code: "GR1", price: 10, quantity: 2, discountedPrice: 5 },
      { code: "GR2", price: 5, quantity: 4, discountedPrice: 4 },
      { code: "GR3", price: 20, quantity: 4, discountedPrice: 4 },
    ];

    assert.equal(controller.subtotal, 120, "sum of total proices before discount");

    assert.equal(controller.totalQuantity, 10, "sum of total quantity");

    assert.equal(controller.discount, 38, "calculate sum of discount");

    assert.equal(controller.totalPayable, 82, "discount - subtotal");

    assert.equal(controller.isDetailsVisible, false, "summary detail initial state");


    controller.send("toggleDetails");
    assert.equal(controller.isDetailsVisible, true, "summary detail after first onclick");


    controller.send("toggleDetails");
    assert.equal(controller.isDetailsVisible, false, "summary detail after closing the iscon");
  });
});
