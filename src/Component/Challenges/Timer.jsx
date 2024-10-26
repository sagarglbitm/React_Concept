import  {  useState } from 'react'

const Timer = ()=> {

    const[time,setTime]=useState(0)

    const  start=()=>{
        window.timer=setInterval(()=>{
            setTime((time)=>time+1)
        },1000)
    }

    const stop=()=>{
        clearInterval(window.timer)
    }

    const reset=()=>{
        clearInterval(window.timer)
        setTime(0)
    }

    return (
        <>
        <h1>{Math.floor(time/60)}min</h1>
        <h1>{time%60}sec</h1>
       <button onClick={start}>start</button>
       <button onClick={stop}>stop</button>
       <button onClick={reset}>Reset</button>

        </>

    
  )
}

export default Timer;