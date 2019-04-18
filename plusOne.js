/*
  Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

  Example: plusOne([1, 2, 3]) => [1, 2, 4]

    I. Assumptions
      1. The integer does not contain any leading zero, except the number 0 itself.
*/

const plusOne = (arr) => {
  // Join array intro a string and convert to a Number that represents expected output
  const int = Number(arr.join('')) + 1
  // transform to string, split chars into an array and return
  return int.toString().split('')
}

plusOne([1, 2, 3]) // => [1, 2, 4]
plusOne([5, 6, 7]) // => [5, 6, 8]