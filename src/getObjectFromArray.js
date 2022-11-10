const getObjectFromArray = (array) => {
  // return array.reduce((acc, {name, price}) => ({
  //   ...acc,
  //   [name]: price,
  // }), {});

  return Object.fromEntries(array.map(({ name, price }) => [name, price]))
}

module.exports = getObjectFromArray;