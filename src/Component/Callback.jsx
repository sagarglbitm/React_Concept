import React, { Component, useCallback, useState } from 'react'
import Header_callback from './Header_callback'

function Callback() {

    const [counter,setCounter]=useState(0)
    const [message, setMessage] = useState('Hello');

    

    // Function is created every time ParentComponent re-renders
    // const sendMessage = () => {
    //   console.log('Sending message:', message);
    // };

    
    // funcn is same then header Componentis not rre-render bcz props are same
    const sendMessage = useCallback(() => {
      console.log('Sending message:', message);
    }, [message]);

  return (
    <div>

    inthis header componnt is re-render again agin when we click on button , which only have to update counter, to fix this issue
    <Header_callback sendMessage={sendMessage}/>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(prev=>prev+1)}>click</button>
      
    </div>
  )
}

export default Callback
