const getKidsFullName = require('../src/getKidsFullName');
const isEqual = require('lodash.isequal');

describe('getKidsFullName test',() => {
  it('simple case', () => {
    const employeesChildren = [
      { age: 24, firstName: 'Name 1', lastName: 'Lastname' },
      { age: 14, firstName: 'Name 2', lastName: 'Lastname' },
      { age: 2, firstName: 'Name 3', lastName: 'Lastname' },
      { age: 19, firstName: 'Name 4', lastName: 'Lastname' },
    ];
    const employeesKids = ["Name 2 Lastname", "Name 3 Lastname"]

    const result = getKidsFullName(employeesChildren);
    expect(isEqual(result, employeesKids)).toBeTruthy();
  })
});