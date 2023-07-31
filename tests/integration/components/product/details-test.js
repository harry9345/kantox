import { module, test } from "qunit";
import { setupRenderingTest } from "kshop-app/tests/helpers";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | product/details", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {

    const item2 = {
      name: " testing Strawberries",
      price: 5,
      quantity: 1,
      discount: "3 for £13.5",
    };

    this.set("product", item2)
    this.set("addToCart", () => {});
    this.set("removeFromCart", () => {});


    await render(hbs`<Product::Details
    @product={{this.product}}
    @addToCart={{this.addToCart}}
    @removeFromCart={{this.removeFromCart}}
    @isOnCart={{false}}
  />`);


    assert.dom("[data-test-price]").hasText("£5.00");

  });
});
