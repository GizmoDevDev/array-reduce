const getKidsFullName = (array) => {
  return array.reduce((acc, child) => {
    if (child.age >= 18) return acc;
    return [...acc, `${child.firstName} ${child.lastName}`]
  }, [])
}

module.exports = getKidsFullName;