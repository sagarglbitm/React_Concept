import React from 'react'

function Header_callback({ sendMessage }) {

    console.log("header render")
  return (
    <div>
      <h2>header</h2>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

// by using react.memo ,it cahek that if paramert is same then no need to render this component ,instaed of use cached result
export default React.memo(Header_callback)
