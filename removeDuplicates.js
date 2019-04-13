/*
  Given a non-unique array, return unique array.

  Example: removeDuplicates([4, 2, 6, 7, 3, 0, 4, 2]) => [4, 2, 6, 7, 3]

    I. Assumptions
      1. Arrays will contain positive integers
*/

const removeDuplicates = (arr) => {
  // don't cheat 😊
  // return [...new Set(arr)]

  // approach #2
  const unique = []

  for (let num of arr) {
    // only push num to unique array if it is unique
    if (!unique.includes(num)) {
      unique.push(num)
    }
  }
  return unique
}

removeDuplicates([4, 2, 6, 7, 3, 0, 4, 2]) // => [ 4, 2, 6, 7, 3, 0 ]
removeDuplicates([1, 1, 1, 1, 1, 1, 2, 2, 2, 3]) // => [ 1, 2, 3 ]
