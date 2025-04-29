import React, { useLayoutEffect, useRef, useState } from 'react';

const LayoutEffect = () => {
    const boxRef = useRef();
    const [width, setWidth] = useState(0);
  
    useLayoutEffect(() => {
      const boxWidth = boxRef.current.offsetWidth;
      setWidth(boxWidth);
    }, []);
  
    return (
      <div>
        <div ref={boxRef} style={{ width: '6vw', background: 'salmon', height: '100px' }} />
        <p>Box width is: {width}px</p>
      </div>
    );
}

export default LayoutEffect
