/*
  Given two arrays, return one, sorted array.

  Example: mergeArrays([4, 2, 6, 7], [3, 0, 4, 2]) => [0, 2, 2, 3, 4, 4, 6, 7]

    I. Assumptions
      1. Arrays will contain positive integers
      2. Arrays will be of same length
      3. You can't use the Array.prototype.sort method :)
*/

const mergeArrays = (arr1, arr2) => {
  // you wish :)
  // return [...arr1, ...arr2].sort((a, b) => a - b)

  // merge arr1 and arr2 into one array
  const unorderedArr = [...arr1, ...arr2]

  // cache original length of unordered array
  // we will need to depend on this value later
  const length = unorderedArr.length

  // store smallest number
  const minNum = Math.min(...unorderedArr)

  // remove smallest number from unorderedArray
  const orderedArray = unorderedArr.splice(unorderedArr.indexOf(minNum), 1)

  // iterate until our orderedArray contains all the numbers from unorderedArray
  while (orderedArray.length < length) {
    // find current min
    const min = Math.min(...unorderedArr)

    // push current min to orderedArray
    orderedArray.push(min)

    // remove current min from array
    unorderedArr.splice(unorderedArr.indexOf(min), 1)
  }
  return orderedArray
}

mergeArrays([4, 2, 6, 7], [3, 0, 4, 2]) // => [ 0, 2, 2, 3, 4, 4, 6, 7 ]
mergeArrays([2, 1, 1, 1], [3, 5, 8, 9]) // => [ 1, 1, 1, 2, 3, 5, 8, 9 ]