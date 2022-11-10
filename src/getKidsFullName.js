const getKidsFullName = (array) => {
  // return array.reduce((acc, child) => {
  //   if (child.age >= 18) return acc;
  //   return [...acc, `${child.firstName} ${child.lastName}`]
  // }, [])

  return array
    .filter(({age}) => age < 18)
    .map(({firstName, lastName}) => `${firstName} ${lastName}`)
}

module.exports = getKidsFullName;