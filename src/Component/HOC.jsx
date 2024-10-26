import React, { useState } from 'react';

// This is the Higher-Order Component (HOC)
const withCounter = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
};

// Example usage with a Button component (functional component)
// eslint-disable-next-line react/prop-types
const Button = ({ count, incrementCount }) => {
  return (
    <button onClick={incrementCount}>Clicked {count} times</button>
  );
};

// Wrap the Button component with the HOC
const HOC = withCounter(Button);

export default HOC;
