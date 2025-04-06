
import React, { useState } from 'react';

function InputComponent({ text, setText }) {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
    </div>
  );
}

function PreviewComponent({ text }) {
  return <p>Preview: {text}</p>;
}


function LiftingStateUp() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>Lifting State Up Example</h1>
      <InputComponent text={text} setText={setText} />
      <PreviewComponent text={text} />
    </div>
  );
}

export default LiftingStateUp;
