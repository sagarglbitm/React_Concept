import React, { useContext } from 'react'
import { AppContext } from './Context'

function Contact_context() {

    const {phone, name}=useContext(AppContext)
  return (
    <div>
      <h2>contact</h2>
      <h3>phone:{phone}</h3>
      <h3>name:{name}</h3>
    </div>
  )
}

export default Contact_context
