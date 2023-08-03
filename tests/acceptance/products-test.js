import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "kshop-app/tests/helpers";

module("Acceptance | products", function (hooks) {
  setupApplicationTest(hooks);

  test("We should be able to add items to cart", async function (assert) {
    await visit("/");

    assert.strictEqual(currentURL(), "/");
  });
});
