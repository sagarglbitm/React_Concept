import React from 'react'
import Accordian from './Accordian'

const Accrdian_item = () => {

    const data=[
        {title:"first",content:"first content"},
        {title:"second",content:"second content"},
        {title:"third",content:"third content"},
        {title:"fourth",content:"fourth content"},
    ]
  return (
    <div>Accrdian_item
        <Accordian data={data}/>
    </div>
  )
}

export default Accrdian_item