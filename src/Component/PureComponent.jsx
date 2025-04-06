import React, { useState } from 'react';

// Child Component
const Child = React.memo(({ name }) => {
  console.log('Rendering Child Component');
  return (
    <div>
      <h2>Welcome, {name}!</h2>
    </div>
  );
});



// Parent Component
function PureComponent() {
  const [name, setName] = useState('John');
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>React.memo Example</h1>
      <Child name={name} />

      <button onClick={() => setName('Johnd')}>
        Set Name to Johnd
      </button>

      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter: {counter}
      </button>
    </div>
  );
}

export default PureComponent;
