import React, { useContext } from 'react'
import { AppContext } from './Context';

function Footer_context() {

    const {phone,name}=useContext(AppContext);
  return (
    <div>
      <h2>footer</h2>
      <h3>phone:{phone}</h3>
      <h3>name:{name}</h3>
    </div>
    
  )
}

export default Footer_context
