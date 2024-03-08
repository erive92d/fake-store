import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set debouncedValue to value after the specified delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clear timeout if value or delay changes before timeout is reached
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Only re-run effect if value or delay changes

    return debouncedValue;
}

export default useDebounce;
