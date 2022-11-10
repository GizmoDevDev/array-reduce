const getBestOption = require('../src/getBestOption');
const isEqual = require('lodash.isequal');

describe('getBestOption test',() => {
  it('simple case', () => {
    const hotelPrices = [
      { hotelName: 'Name 1', price: 300, duration: 10},
      { hotelName: 'Name 2', price: 250, duration: 9},
      { hotelName: 'Name 3', price: 320, duration: 12},
      { hotelName: 'Name 4', price: 500, duration: 30},
    ];

    const bestOption = { hotelName: 'Name 4', price: 500, duration: 30}
    const result = getBestOption(hotelPrices);
    expect(isEqual(result, bestOption)).toBeTruthy();
  })
});