// Calculates the total price of the items in a cart
function cartTotal(cart) {
  let total = 0;
  for (const item of cart.items || []) {
    total += item.price * item.quantity;
  }
  return total;
}

module.exports = { cartTotal };
