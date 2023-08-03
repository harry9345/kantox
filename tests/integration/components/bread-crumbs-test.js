import { module, test } from "qunit";
import { setupRenderingTest } from "kshop-app/tests/helpers";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | bread-crumbs", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<BreadCrumbs @pageTitle="Groceries"/>`);

    assert.dom("[data-test-bread-crumbs-title]").hasText("Groceries");
  });
});
