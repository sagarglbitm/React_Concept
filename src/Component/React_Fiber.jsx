import React, { useState, useTransition } from 'react';

const React_Fiber = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition(); // useTransition hook for concurrent updates

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Defer the list generation using startTransition (concurrent rendering)
    startTransition(() => {
      const newList = Array(20000).fill('').map((_, i) => `${newText} ${i}`);
      setList(newList);
    });
  };

  return (
    <div>
      <h1>React Fiber Example with useTransition</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      {isPending && <p>Loading list...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React_Fiber;
