import { JSONAPISerializer } from 'miragejs';

export default JSONAPISerializer.extend({
  serialize(object, request) {
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);

    if (object.models && object.models.length > 0 && object.models[0].attrs.quantity) {
      json.data.forEach((dataItem) => {
        const model = object.models.find((item) => item.id === dataItem.id);
        if (model && model.attrs.quantity) {
          dataItem.attributes.quantity = model.attrs.quantity;
        }
      });
    }
    return json;
  },
});
