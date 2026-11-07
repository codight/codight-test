// Calculates the total price of the items in a cart
function cartTotal(cart) {
  let total = 0;
  for (const item of cart.items || []) {
    total += item.price * item.quantity;
  }
  // Round to two decimal places to avoid floating‑point precision errors
  return Math.round(total * 100) / 100;
}

module.exports = { cartTotal };
