import React from 'react';

function SyntheticEventExample() {
  const handleClick = (event) => {
    // Log the synthetic event
    console.log('Synthetic Event:', event);

    // Access event properties (e.g., target)
    console.log('Clicked element:', event.target);

    // Prevent default behavior (if needed)
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    // Log the value of the input field
    console.log('Input Value:', event.target.value);
  };

  return (
    <div>
      <h1>Synthetic Event Example</h1>
      {/* onClick synthetic event */}
      <button onClick={handleClick}>Click Me</button>

      {/* onChange synthetic event */}
      <input
        type="text"
        placeholder="Type something"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SyntheticEventExample;
