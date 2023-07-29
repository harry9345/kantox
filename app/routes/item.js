import Route from "@ember/routing/route";

import { service } from "@ember/service";

export default class ItemRoute extends Route {
  @service store;

  async model(params) {
    const { item_id } = params;
    const allProducts = await this.store.findAll("product");
    const product = allProducts.findBy("id", item_id);

    console.log("product", product);
    return product;
  }
}
