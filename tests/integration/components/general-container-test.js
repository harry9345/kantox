import { module, test } from "qunit";
import { setupRenderingTest } from "kshop-app/tests/helpers";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | general-container", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {

    await render(hbs`<GeneralContainer />`);
    assert.dom('[data-test-app-logo]').exists();
  });
});
