
import React from 'react'
import Carousel from './Carousel'

const Carousel_Item = () => {

    const items=[
        {title:"First card",name:"sports" ,description:"this is first card"},
        {title:"seond card",name:"events" ,description:"this is second card"},
        {title:"third card",name:"socail" ,description:"this is third card"},
        {title:"Fourth card",name:"function" ,description:"this is fourth card"}
    ]
    console.log(items)
  return (
    <div>
        Carousel_Item
        <Carousel items={items}/>
    </div>
  )
}

export default Carousel_Item