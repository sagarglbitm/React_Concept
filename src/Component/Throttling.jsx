import { useState, useEffect, useCallback } from 'react';

// Custom hook for throttling
function useThrottle(callback, delay) {
  const [lastCall, setLastCall] = useState(0);

  return useCallback((...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      callback(...args);
      setLastCall(now);
    }
  }, [lastCall, delay, callback]);
}

function Throttling() {
  const [count, setCount] = useState(0);

  // Throttle the increment function
  const handleClick = useThrottle(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000); // Throttles the function to be called at most once every second

  return (
    <div>
      <h1>Throttle Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me (Throttled)</button>
    </div>
  );
}

export default Throttling;
