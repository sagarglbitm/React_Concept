import React, { Component, useCallback, useState } from 'react'
import Header_callback from './Header_callback'

function Callback() {

    const [counter,setCounter]=useState(0)

    // const newFn=()=>{

    // }

    // usecallback is not created instance it will cached funcn in  memiry and when re-render componnt it use cached fncn and in this 
    // funcn is same then header Componentis not rre-render bcz props are same
    const newFn=useCallback(()=>{},[counter])
  return (
    <div>

    inthis header componnt is re-render again agin when we click on button , which only have to update counter, to fix this issue
    <Header_callback newFn={newFn}/>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(prev=>prev+1)}>click</button>
      
    </div>
  )
}

export default Callback
