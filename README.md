# Frontend Tech Test

## Routing : 
- Main page => index.js which show the avaible products
- Shopping-cart => to see what we have on our cart
- Not-found page => in case landing on random page

## My overal understanding:

- After landing on a page, ember looks for corespanding route in router.js and with the help of /route/file.js and controller/file.js it will render its template/file.hbs for the user.
- The difference between route/file.js and its cotroller is that the route/file.js is passing the model(data) to its template but the controller/file.js will pass props and action(functions) to template/file.hbs, beside that, the controler can access to the model from route/file.js as well.

- The controller/file.js, as mention, will hold the props and actions and can pass them to its template/file.hbs, on template/file.hbs we can access those props/action with the help of hbs{{this.props}} to render value or run a function. 
- One the things we can do on route/file.js is to fetch data

- The "this" is pointing to the the controller or current route.
- Passing data to template can be faster from controller than its route.
- The yield tag will render the content between the tag, similar to children in React.js
- The outlet is used in the parent template to indicate where the children route's template should render.
- Nested component, to keep the code more leaner and more maintainable.
- "Tracked properties" is a decorator to track the state of a property
- "getter" is to get the latest state of a tracked property
- "action" is just a function in Ember that we need to use the "action" decoration, which needs to be added before the function name
- "helper" its built-in  action by Ember, like {{on "click" this.toggleDetails}} the on is a helper, the click is the event that we want to trigger, and the action that we had define. we have many more predefine helper by Ember
 "on" to trigger an event, "concat" to concatinate, 
 "get" to get the value of a property {{ get this.product "name"}} to get name propert of this product, 
 "hash" to create a js object inside of a template, 
 "let" to create a temprary variable in template
 "if" just like normal if condition
 "unless" opposite of if 
 "each"just like for for each loop to be used in a template
- we pass the props to child component with @props
- custome helper(just like hook in react), we can create them by "ember g helper myHelper" it receive 2 argument(params, hash)  the second one can be optional, 
- servise can comunicate between different component and route and also different services


## some details about this project
- `general-component` a reuseble HOC through out the project to show app logo, icon and other details
- `svg-icon` to render dynamic `img`tag depending on the value it recive
- `product` a reuseable component to show products detail with 2 cub component `product/product-details` for details of the product, `product/product-image` to show image of the product. 
- `bread-crumbs` a navigation bar for the app.
- Helpres/`currency` to show a curency sign and show correct amount in cent
- models `product` a data model
- service `cart.js` to calculate and share value of the funcations, add/remove/ calculate the discount figure.
- `controller/cart` to calculate the total amount/payable amount after disount/ total given discout/ and other values
- `mirage` to moch fetch data

## Task Description
You are the lead FE programmer for a small web shop. You are required to make a simple page where the user can add products to a cart, and the total of the cart is updated in real time.

You will have an API endpoint that returns products with the following structure:

| ID   | Name         | Price |
| ---- | -------------|-------|
| GR1  | Green Tea    |£3.11  |
| SR1  | Strawberries |£5.00  |
| CF1  | Coffee       |£11.23 |

This already implemented for you using [mirage](https://www.ember-cli-mirage.com/) in the file `mirage/config.js` you can modify this file and adapt it to your needs

### Special conditions
- The CEO is a big fan of buy-one-get-one-free offers and of green tea. He wants us to add a rule to do this.
- The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50
- The CTO is a coffee addict. If you buy 3 or more coffees, the price of all coffees should drop to two thirds of the original price.

We can assume that discounts do not change very often so they can be hardcoded in the application, for display purposes.
Our check-out can scan items in any order, and because the C*Os change their minds, it needs to be flexible regarding our pricing rules.

## Deliverables
- A shop route where the user can view all available items and add to basket (a quantity selector would be nice). There is already a route `products` implemented as an example (files `app/templates/products.hbs` and `app/routes/products.js` ), it renders all the product available on the mirage endpoint. You can decided wether to use this route or implemented another. Also there is a `Product` component you can use as example (files `app/components/product.js` and `app/components/product.hbs`)
- A checkout route where the user can view all items in his basket with:
  - The quantity of each item and the original prices
  - All the discounts currently applied
  - The total price of the basket after discounts applied
- Some navigation implementation between the routes.
- A service or similar that is responsible of calculating and persisting total amount.
- The wireframes to create the components and elements used on the app are specified in this [Figma](https://www.figma.com/file/xhMkdALy0WxUN7g4lIw3vn/FE-Technical-Test_Kantox?type=design&node-id=86%3A219&mode=design&t=g3K3FPssMx8axuHL-1) file.

### Bonus point
- Implement tests (integration or acceptance)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd fe-tech-test`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment=production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
