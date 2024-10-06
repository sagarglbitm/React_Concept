import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Effect() {

    const [count,setCount]=useState(0)

    const [variable,setVariable]=useState(0)

    const [dependency,setDependnecy]=useState(0)

    // useEffect(callback,dependency)


    // witout dependency in use effect runs on every render , when state change
    useEffect(()=>{

        // setTimeout(arrow-function,time)
        setTimeout(()=>{

            setCount(count=>count+1)

        },2000)
    })

    // with empty array
    useEffect(()=>{
        setTimeout(()=>{
            setVariable(variable+100)
        },2000)
    },[])

     // with dependency
     useEffect(()=>{
        setTimeout(()=>{
            setDependnecy(dependency+500)
        },2000)
    },[dependency])



  return (
    <div>
      <h1>i have  render count without dependency {count} time</h1>
      <h1>i have  render with empty array {variable} time</h1>

      <h1>i have  render with dependency{dependency} time</h1>
    </div>
  )
}

export default Effect
