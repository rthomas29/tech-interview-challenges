const sumPairs = (arr, targetValue) => {
  // instantiate cache
  const cache = new Map()
  // will hold our sum pairs
  const results = []

  arr.forEach(num => {
    // if the number doesn't exist in our cache, let's add it
    if (!cache[num]) {
      cache.set(num, num)
    }

    // for each number in arr, let's subtract the current num from our targetValue
    // since we have two knowns (targetValue and num),
    // we can work backwards to find the missing number in our pair
    const missingNumber = targetValue - num

    // if the missing number is in our cache, return it along with the current num
    // we've found our pair! :)
    if (cache.has(missingNumber)) {
      const match = cache.get(missingNumber)
      results.push([match, num])
    }
  })
  return results
}

sumPairs([0, 9, 2, 4, 5, 1, 8], 9) // => [ [0, 9], [4, 5], [1, 8] ]