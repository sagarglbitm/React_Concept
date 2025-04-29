import React from 'react'

const User = ({name}) => {
  if(name==='error'){
    throw new Error('something wrong')
  }
  return(
    <div>user name is {name}</div>
  )
}

export default User