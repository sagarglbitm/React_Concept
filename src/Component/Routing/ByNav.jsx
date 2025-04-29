import React from 'react'
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";


const ByNav = () => {
    const navigate=useNavigate();

    const handleNav=(props)=>{
        navigate(props)
    }
  return (
    <div>
        ByNavigation

         {/* it  click buton first componet is rendr but we want that when button is clicked then navigate for this we have to use ()=> */}
        {/* <button onClick={handleNav('/aboutNav')}>AboutNavigation</button> */}


        <button onClick={() =>handleNav('/aboutNav')}>AboutNavigation</button>
        <button onClick={() =>handleNav('/settingNav')}>SettingNav</button>


    </div>


  )
}

export default ByNav