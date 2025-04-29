import React,{useState,useEffect,useRef} from 'react'

const MaxCount = () => {


    const [count,setCount]=useState(0)
    const[time,setTime]=useState(10)
    const id=useRef(null)

    const clear=()=>window.clearInterval(id.current)

    useEffect(()=>{
        
       id.current= window.setInterval(() => {
            setTime((time)=>time-1)
            
        }, 1000);


    },[])

    useEffect(()=>{
        if(time === 0){
            clear()
        }
    },[time])



  return (
    <div>MaxCount {count}

    { time===0?null:

    <button onClick={()=>setCount(count+1)}>+</button>
}

<h2>{time}</h2>
    </div>
  )
}

export default MaxCount