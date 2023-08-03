import { module, test } from "qunit";

import { setupTest } from "kshop-app/tests/helpers";

module("Unit | Model | product", function (hooks) {
  setupTest(hooks);

  test("it sets attributes correctly", function (assert) {
    let store = this.owner.lookup("service:store");

    let greanTea = {
      name: "Grean Tea",
      price: 5,
      code: "GR1",
      src: "/assets/green-tea.png",
      quantity: 0,
      discount: "buy 3 get 1 free",
      discountedPrice: 3,
    };

    let model = store.createRecord("product", greanTea);

    assert.strictEqual(model.name, "Grean Tea", "item name is Grean Tea");
    assert.strictEqual(model.price, 5, "each tea cost 5");
    assert.strictEqual(model.code, "GR1", " item code is correct");
    assert.strictEqual(
      model.src,
      "/assets/green-tea.png",
      "grean tea image src is correct"
    );
    assert.strictEqual(model.quantity, 0, "no orders yet");
    assert.strictEqual(model.discount, "buy 3 get 1 free", "its a good deal");
    assert.strictEqual(model.discountedPrice, 3, "good discount fo reach item");
  });
});
