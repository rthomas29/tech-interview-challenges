/*
  Given a string of space separated words, return the word that occurs most frequently in the string.

  Example: str = 'dog cat mouse dog bird dog' => dog

    I. Assumptions
      1. str will always be separated by spaces
      2. str will always contain alphabetical characters
      3. if two words have the same number of occurences, return the last word in the string
        - Example: str = 'countOccurences(dog dog dog cat cat cat') => cat
*/

const countOccurences = (str) => {
  // create cache to store our words
  // I use Map here because the original insertion order is preserved,
  // so when we iterate to find max occurences later, we can accurately handle the match occurence cases. (see Assumption #3)
  const cache = new Map()

  // split our string into an array
  // pass a space as our delimeter
  const arr = str.split(' ')

  arr.forEach(word => {
    // we will track the occurence of each word in our cache

    // if word does not exist in our cache, add it
    // word will be our key, the num of occurences will be our value
    if (!cache.has(word)) {
      cache.set(word, 1)
    } else {
      // otherwise, if the word already exists, get it and increment occurence by 1
      const occurences = cache.get(word) + 1

      // update word occurence in our cache
      cache.set(word, occurences)
    }
  })
  return findMax(cache)
}

const findMax = (cache) => {
  let max = 0
  let mostOccuringWord = ''

  cache.forEach((value, key) => {
    // if current cache value is greater than OR EQUAL to max, reassign max to current value
    // we must check for equal in order to return the last word in the matching occurence case (see Assumption #3)
    // also set mostOccuringWord to be whatever the current key is

    if (value >= max) {
      max = value
      mostOccuringWord = key
    }
  })
  return mostOccuringWord
}

const str1 = 'dog cat mouse dog bird dog'
const str2 = 'cat cat cat bird bird bird'
countOccurences(str1) // => dog
countOccurences(str2) // => bird