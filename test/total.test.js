const test = require("node:test");
const assert = require("node:assert");
const { cartTotal } = require("../src/total");

test("adds up the items", () => {
  const cart = { items: [{ price: 10, quantity: 2 }, { price: 5, quantity: 1 }] };
  assert.strictEqual(cartTotal(cart), 25);
});

test("an empty cart totals 0", () => {
  assert.strictEqual(cartTotal({}), 0);
});
