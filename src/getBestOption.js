const getBestOption = (array) => {
  // let bestOption = array[0];
  // for (const option of array) {
  //   if (bestOption.price / bestOption.duration > option.price / option.duration) {
  //     bestOption = option;
  //   }
  // }
  // return bestOption;

  return array.reduce((bestOption, option) => {
    const bestOptionValue = bestOption.price / bestOption.duration
    const optionValue = option.price / option.duration
    return bestOptionValue < optionValue ? bestOption : option;
  }, array[0])
}

module.exports = getBestOption;