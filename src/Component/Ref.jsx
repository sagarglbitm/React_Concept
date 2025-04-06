import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Ref = () => {
  const [val,setVal]=useState(0)
  const [count,setCount]=useState(0)
  
  const refValue=useRef(0)


  //it will render agaain in infifnite time, so we ude useRef for that
  // useEffect(()=>{
  //   setCount((prev)=>prev+1)
  // })


  // now it will render page tonly when button clicke oor any event happen
  useEffect(()=>{
    refValue.current=refValue.current+1
  })


  return (
    <div>
      <button onClick={()=>setVal((prev)=>prev+1)}>+1</button>
      <p>{val}</p>
      <button onClick={()=>setVal((prev)=>prev-1)}>-1</button>
      <p> count: {count}</p>
      <p> ref value:{refValue.current}</p>
      
    </div>
  )
}



export default Ref

