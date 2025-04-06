import React from 'react'
import { useState } from 'react'

function State() {

  const[color,setColor]=useState("red")

  const[brand,setBrand]=useState("Ferrari")
  const[model,setModel]=useState("rome")
  const[year,setYear]=useState(2023)

  const [car,setCar]=useState({
    brand:"FERRARI",
    model:"rome",
    year:2023
  })

  const changeColor=()=>{
    setColor("blue")
    console.log(color)

  }

  const changeDetails=(e)=>{
    e.preventDefault()

    // if we write this then it remove inital all thing and update only color

    // setCar({color:"pink"})

    // so instead of this write according that

    setCar((prev)=>{
      return{...prev,brand:"rangerover", color:"pink"}
    })
  }



  return (
    <div>

      <h2>my fav color is {color}</h2>
      <button onClick={changeColor}>Blue</button>
      <h1>---------------------------------------------------------</h1>

       {/* instead of write multiple stae  use object of that  */}
      <h1>it is {brand}</h1>
      <h2>it is {color} {model} from {year}</h2>

      <h1>it is {car.brand}</h1>
      <h2>it is {car.color} {car.model} from {car.year}</h2>

      <button onClick={changeDetails}>pink</button>
    </div>
  )
};

export default State
