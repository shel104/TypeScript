"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = "beanie";
const product = products_1.default.filter((product) => product.name === productName)[0];
console.log(product);
if (product.preOrder) {
    console.log("We will send you a message when your product is on its way");
}
let shipping;
let taxPercent;
let taxTotal;
let total;
const shippingAddress = "575 Broadway, New York City, New York";
if (Number(product.price) > 25) {
    console.log("This item will receive free shipping.");
    shipping = 0;
}
else {
    shipping = 5;
}
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
