import { module, test } from "qunit";
import { setupRenderingTest } from "kshop-app/tests/helpers";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | product/image", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    const item2 = {
      name: " testing Strawberries",
      price: 5,
      quantity: 1,
      discount: "3 for £13.5",
    };

    this.set("product", item2)

    await render(hbs`<Product::Image   @src={{this.product}}  @isOnCart={{false}} />`);

    assert.dom("[data-test-discount-info]").hasText("3 for £13.5");
  });
});
