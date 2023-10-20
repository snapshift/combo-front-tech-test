/**
 * 
 * Part 2: Test Improvement
 *
 * Improve the existing tests for the `reverseString` function.
 * 
 */

import { reverseString } from "./reverseString";

describe('reverseString', () => {
  it('should reverse a string', () => {
    // Original test cases
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('world')).toEqual('dlrow');
  });

  // Add more test cases as needed to cover edge cases and potential issues
});
