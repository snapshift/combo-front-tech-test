/**
 * Part 1: Algorithm
 * 
 * Problem: 
 * Write a function `findDuplicates` that takes an array of numbers as params and returns 
 * an array containing all the unique numbers that appear more than once in the params array. 
 * You can assume that the params array will only contain positive integers.
 * 
 * Example:
 * findDuplicates([1, 2, 3, 4, 5, 2, 6, 7, 8, 8, 9]) => [2, 8]
 * findDuplicates([5, 2, 5, 1, 2, 9, 9, 3, 6, 6, 7]) => [5, 2, 9, 6]
 * findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9]) => [] // No duplicates
 * 
 * /

/**
 * @param {number[]} nums
 * @return {number[]}
 */

export const findDuplicates = (arrayOfNumbers: number[]): number[] => {
  const ducplicateNumberArray: number[] = []

  arrayOfNumbers.reduce((accumulator, numberElement) => {
    /* @ts-ignore-next-line */
    if (!accumulator.includes(numberElement)) {
    /* @ts-ignore-next-line */
      accumulator.push(numberElement)
    } else {
      if (!ducplicateNumberArray.includes(numberElement)) {
        ducplicateNumberArray.push(numberElement)
      }
    }

    return accumulator
  }, [])

  return ducplicateNumberArray
}
