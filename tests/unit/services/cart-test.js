import { module, test } from "qunit";
import { setupTest } from "kshop-app/tests/helpers";

module("Unit | Service | cart", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    let service = this.owner.lookup("service:cart");
    assert.ok(service);
  });

  test("Test cart service ", function (assert) {
    const service = this.owner.lookup("service:cart");
    assert.strictEqual(service.listItem.length, 0, "List Item is eampty");

    const item1 = {
      name: "Green Tea",
      price: 3.11,
      code: "GR1",
      quantity: 1,
      discountedPrice: 0,
    };
    service.addItem(item1);
    assert.strictEqual(service.listItem.length, 1, "First item has been added");

    const item2 = {
      name: "Strawberries",
      price: 5,
      code: "SR1",
      quantity: 1,
      discountedPrice: 0,
    };
    service.addItem(item2);
    assert.strictEqual(
      service.listItem.length,
      2,
      "Another item has been added"
    );

    service.removeItem(item2);
    assert.strictEqual(service.listItem.length, 1, "1 item has been removed");
  });
});
