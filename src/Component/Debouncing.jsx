import React, { useState, useEffect } from 'react';

const Debouncing = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

//   debouncing always use in useeffecta and settimeout
  useEffect(() => {
    // Set a timeout to update the debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
      console.log(debouncedValue)
    }, 1000); // Delay of 500ms

    // Cleanup function to clear timeout if inputValue changes before the delay
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]); // Only run when inputValue changes

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default Debouncing;
