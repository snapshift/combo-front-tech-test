/**
 * 
 * Part 2: Test Improvement
 * Add test cases to ensure the function works as expected.
 */

import { findLargestProduct } from "./findLargestProduct";

describe('findLargestProduct', () => {
  it('should find the largest product of two distinct elements', () => {
    expect(findLargestProduct([1, 2, 3, 4, 5])).toBe(20)
    expect(findLargestProduct([4, 2, 5, 1, 5])).toBe(20)
    expect(findLargestProduct([5, 7, 9, 11, 13])).toBe(143)
    expect(findLargestProduct([5, 5])).toEqual(0)
  });
});
