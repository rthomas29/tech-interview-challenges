/*
  Rotate the array to the left by d positions

  Example: rotLeft([1, 2, 3, 4, 5], 4) => 5 1 2 3 4

  I. Assumptions
    1. d will always be positive

  Time Complexity: 0(n)
    - We only iterate over our list once, so rotLeft has a linear time complexity
*/

const rotLeft = (a, d) => {
  const rotatedArray = []
  const length = a.length

  a.forEach((num, idx) => {
    // attempt to find newIndex by subtracting rotation value from current index
    let newIndex = idx - d

    // if newIndex is negative, we need to wrap around the list
    // adding length to the negative value will return the true newIndex

    // EX:
    // if d === 4, a.length === 5
    // at position 0, 0 - d === -4
    // that equates to index 1 because a.length (5) + newIndex (-4) === 1
    // 1 is our true newIndex
    if (newIndex < 0) {
      newIndex = length + newIndex
    }

    // assign current value to its newIndex
    rotatedArray[newIndex] = num
  })

  // return list as string per spec
  return rotatedArray.join(' ')
}

rotLeft([1, 2, 3, 4, 5], 4) // => 5 1 2 3 4
rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10) // => 77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77
rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13) // => 87 97 33 47 70 37 8 53 13 93 71 72 51 100 60