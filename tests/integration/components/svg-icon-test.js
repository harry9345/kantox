import { module, test } from "qunit";
import { setupRenderingTest } from "kshop-app/tests/helpers";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | svg-icon", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    const imageSrc = "/assets/cart.svg";
    this.set("imageSrc", imageSrc);

    await render(hbs`<SvgIcon @name="cart" />`);

    assert.dom("[data-test-img]").hasAttribute("src", imageSrc);
  });
});
