/**
 * 
 * Part 2: Test Improvement
 *
 * Improve the existing tests for the `findDuplicates` function.
 * Add additional test cases to ensure its correctness and optimize the function for efficiency.
 * 
 */

import { findDuplicates } from "./findDuplicates";

describe('findDuplicates', () => {
  it('should find duplicates in an array', () => {
    // Original test cases
    expect(findDuplicates([1, 2, 3, 4, 5, 2, 6, 7, 8, 8, 9])).toEqual([2, 8]);
    expect(findDuplicates([5, 2, 5, 1, 2, 9, 9, 3, 6, 6, 7])).toEqual([5, 2, 9, 6]);
    expect(findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([]); // No duplicates

    // Add more test cases as needed to cover edge cases and potential issues

  });
});
