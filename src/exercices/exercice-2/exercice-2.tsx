/**
 * Problem:
 * Implement a custom React hook named `usePrevious`.
 * This hook should take a value of generic type `T` as a parameter and return the previous value or `undefined` if there's none.
 * You can assume that the value can be of any type.
 * The test suite provided must be green. ✅
 * 
 * Requirements:
 * - Use only React's built-in hooks.
 * - The function signature should be `function usePrevious<T>(value: T): T | undefined`.
 * 
 * Example:
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 * // prevCount will be `undefined` initially, and then hold the previous value of `count` after updates.
 * 
 * Hints:
 * - Ask for one or more if you're hard stuck !
 */

import { useEffect, useRef } from "react"

const usePrevious = (parameter: any) => {
    const ref = useRef()

    useEffect(() => {
        if (ref.current !== parameter) {
            ref.current = parameter
        }
    }, [parameter])

    return ref.current
}

export default usePrevious