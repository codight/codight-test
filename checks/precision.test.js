const test = require("node:test");
const assert = require("node:assert");
const { cartTotal } = require("../src/total");

test("keeps cents precise", () => {
  assert.strictEqual(cartTotal({ items: [{ price: 0.1, quantity: 3 }] }), 0.3);
});
