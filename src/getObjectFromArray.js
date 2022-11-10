const getObjectFromArray = (array) => {
  return array.reduce((acc, {name, price}) => ({
    ...acc,
    [name]: price,
  }), {});
}

module.exports = getObjectFromArray;