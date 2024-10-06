import React from 'react'

function Header_callback() {

    console.log("header render")
  return (
    <div>
      <h2>header</h2>
    </div>
  )
}

export default React.memo(Header_callback)
