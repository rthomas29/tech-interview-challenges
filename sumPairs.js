/*
  Given a list of numbers and a target value,
  find all pairs of numbers that equal the target value when summed

  Example: sumPairs([0, 9, 2, 4, 5, 1, 8], 9)  => [ [0, 9], [4, 5], [1, 8] ]

    I. Assumptions
      1. arr will only contain positive integers
      2. arr will never be empty and will contain at least two numbers
*/

const sumPairs = (arr, targetValue) => {
  // instantiate cache
  const cache = new Map()
  // will hold our sum pairs
  const results = []

  arr.forEach(num => {
    // if the number doesn't exist in our cache, let's add it
    // we'll need to check against our cache for our missing number later
    if (!cache[num]) {
      cache.set(num, num)
    }

    // for each number in arr, let's subtract the current num from our targetValue
    // since we have two knowns (targetValue and num),
    // we can work backwards to find the missing number in our pair
    const missingNumber = targetValue - num

    // if the missing number is in our cache, return it along with the current num
    if (cache.has(missingNumber)) {
      const match = cache.get(missingNumber)
      // we've found our pair! :)
      results.push([match, num])
    }
  })
  return results
}

sumPairs([0, 9, 2, 4, 5, 1, 8], 9) // => [ [0, 9], [4, 5], [1, 8] ]