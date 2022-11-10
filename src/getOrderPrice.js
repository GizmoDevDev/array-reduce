const getOrderPrice = (array) => {
  // let totalPrice = 0;
  // for (const {price, amount} of array) {
  //   totalPrice += price * amount;
  // }
  // return totalPrice;

  return array.reduce((totalPrice, {price, amount}) => totalPrice + price * amount, 0);
}

module.exports = getOrderPrice;