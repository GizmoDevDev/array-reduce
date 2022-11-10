const getObjectFromArray = require('../src/getObjectFromArray');
const isEqual = require('lodash.isequal');

describe('getObjectFromArray test',() => {
  it('simple case', () => {
    const order = [
      { name: 'Fanta', price: 300, amount: 10},
      { name: 'Sprite', price: 250, amount: 10},
      { name: 'Cola', price: 350, amount: 10},
      { name: 'Buratino', price: 3_000, amount: 10},
    ];
    const priceMap = {
      Fanta: 300,
      Sprite: 250,
      Cola: 350,
      Buratino: 3_000,
    }

    const result = getObjectFromArray(order);
    expect(isEqual(result, priceMap)).toBeTruthy();
  })
});