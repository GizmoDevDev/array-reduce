const getBestOption = (array) => {
  let bestOption = array[0];
  for (const option of array) {
    if (bestOption.price / bestOption.duration > option.price / option.duration) {
      bestOption = option;
    }
  }
  return bestOption;
}

module.exports = getBestOption;