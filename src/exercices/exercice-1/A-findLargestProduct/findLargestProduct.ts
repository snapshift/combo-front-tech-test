/**
 * Part 1: Algorithm
 * 
 * Problem:
 * Write a function `findLargestProduct` that takes an array of positive integers as params 
 * and returns the largest product of any two distinct elements in the array. 
 * The params array must contains at least two positive integers.
 * 
 * Example:
 * findLargestProduct([1, 2, 3, 4, 5]) => 20 // Largest product: 4 * 5
 * findLargestProduct([4, 2, 5, 1, 5]) => 20 // Largest product: 4 * 5
 * findLargestProduct([5, 7, 9, 11, 13]) => 143 // Largest product: 11 * 13`
 * 
 */

const hasSameNumbers = (array: number[]): boolean => {
  const sameValues = []

  array.reduce((accumulator, numberItem) => {
    /*@ts-ignore-next-line */
    if (!accumulator.includes(numberItem)) {
    /*@ts-ignore-next-line */
      accumulator.push(numberItem)
    } else {
    /*@ts-ignore-next-line */
      if (!accumulator.includes(numberItem)) {
    /*@ts-ignore-next-line */
        sameValues.push(numberItem)
      }
    }
    return accumulator
  }, [])

  return Boolean(sameValues.length)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findLargestProduct = (array: number[]): number => {
  if (!array.length || array.length < 2 || hasSameNumbers(array)) {
    throw new Error('It requires at least 2 and should not be the same.')
  }

  const sortedNumbers = array.sort((a, b) => b - a)

  const value = sortedNumbers[0]
  let value2 = 0

  for (const sortedNumber of sortedNumbers) {
    if (sortedNumber !== value) {
      value2 = sortedNumber
      break
    }
  }

  return value * value2
}