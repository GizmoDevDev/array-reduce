const getOrderPrice = require('../src/getOrderPrice');

describe('getOrderPrice test',() => {
  it('simple case', () => {
    const order = [
      { name: 'Fanta', price: 300, amount: 10},
      { name: 'Sprite', price: 250, amount: 10},
      { name: 'Cola', price: 350, amount: 10},
      { name: 'Буратино', price: 3_000, amount: 10},
    ];
    const totalPrice = 39_000

    expect(getOrderPrice(order)).toEqual(totalPrice)
  })
});
