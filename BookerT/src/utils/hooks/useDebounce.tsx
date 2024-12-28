import { useState, useEffect } from "react";

export const useDebounce = (value: any, delaySeconds: number) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delaySeconds * 1000);

    // Clear the timer if the value changes before the delay expires
    return () => {
      clearTimeout(handler);
    };
  }, [value, delaySeconds]);

  return debouncedValue;
};
