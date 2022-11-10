const getOrderPrice = (array) => {
  let totalPrice = 0;
  for (const {price, amount} of array) {
    totalPrice += price * amount;
  }
  return totalPrice;
}

module.exports = getOrderPrice;