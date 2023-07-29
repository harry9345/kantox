export default function () {
  this.namespace = "/api";

  this.get("/assets/:filename", { timing: 0 });

  this.get("/products", function () {
    return {
      data: [
        {
          type: "product",
          id: "GR1",
          attributes: {
            name: "Green Tea",
            price: 3.11,
            code: "GR1",
            src: "/assets/green-tee.png",
          },
        },
        {
          type: "product",
          id: "SR1",
          attributes: {
            name: "Strawberries",
            price: 5,
            code: "SR1",
            src: "/assets/strawberries.png",
          },
        },
        {
          type: "product",
          id: "CF1",
          attributes: {
            name: "Coffee",
            price: 11.23,
            code: "CF1",
            src: "/assets/coffee.png",
          },
        },
      ],
    };
  });
}
