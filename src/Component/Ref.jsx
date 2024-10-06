import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Ref() {

  const[value,setValue]=useState(0)
  const[count,setCount]=useState(0)

  const reference=useRef(0)

  const inputElemet=useRef();

  console.log(reference)

  // useEffect(()=>{
  //   setCount(prev=>prev+1)
  // },)

  useEffect(()=>{
   reference.current=reference.current+250;
  })

  return (
    <div>
      <h1>it give render compontn in an infinite loop</h1>
      <button onClick={()=>{setValue((prev)=>prev-1)}}>-1</button>
      <h1> value {value}</h1>
      <button onClick={()=>{setValue((prev)=>prev+1)}}>+1</button>
      <h1>render count {count}</h1>

      <h1>---------------------------------------------</h1>
      <h2>render count by using useref hooks{reference.current}</h2>


      <h2>-----------------------------------------</h2>
      <input type='text' ref={inputElemet}/>
      <button onClick={()=>inputElemet.current.style.background="blue"}>click</button>
    </div>
  )
}

export default Ref

