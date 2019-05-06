/*
  Given an array of integers, A, sorted in ascending order, return an array of the squares of each number, also in sorted ascending order.

  Example: sortedSquares([-4, -1, 0, 3, 10]) => [0, 1, 9, 16, 100]

  I. Assumptions
    1. A will only contain numerical values

  Time Complexity: 0(n)
    - We only iterate over A once, so sortedSquares has a linear time complexity
*/

const sortedSquares = A => A.map(num => num * num).sort((a, b) => a - b)

sortedSquares([-4, -1, 0, 3, 10]) // => [0, 1, 9, 16, 100]
sortedSquares([5, 4, 3, 2, 1]) // => [1, 4, 9, 16, 25]