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
            src: "/assets/green-tea.png",
            discount: "2 for 1",
            quantity: 0,
            discountedPrice: 0,
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
            discount: "3 for £13.50",
            quantity: 0,
            discountedPrice: 0,
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
            discount: "Multi-buy Discount",
            quantity: 0,
            discountedPrice: 0,
          },
        },
      ],
    };
  });
}
