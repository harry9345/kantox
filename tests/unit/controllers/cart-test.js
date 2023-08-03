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

    assert.strictEqual(
      controller.subtotal,
      120,
      "sum of total proices before discount"
    );

    assert.strictEqual(controller.totalQuantity, 10, "sum of total quantity");

    assert.strictEqual(controller.discount, 38, "calculate sum of discount");

    assert.strictEqual(controller.totalPayable, 82, "discount - subtotal");

    assert.false(controller.isDetailsVisible, "summary detail initial state");

    controller.send("toggleDetails");
    assert.true(
      controller.isDetailsVisible,
      "summary detail after first onclick"
    );

    controller.send("toggleDetails");
    assert.false(
      controller.isDetailsVisible,
      "summary detail after closing the iscon"
    );
  });
});
