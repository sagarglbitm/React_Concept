import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

const ByLink = () => {
  return (
    <div>ByLink
        
        <Link to='/homeLink'>HomeLink</Link>
        <Link to='/profileLink'>ProfileLink</Link>
    </div>
  )
}

export default ByLink