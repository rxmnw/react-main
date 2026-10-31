import React, { memo } from 'react'

const Button = memo(({text}) => {
    console.log("Button is renderinbg");
    
  return (
    <div>
        <h1>{text.name}</h1>
    </div>
  )
})

export default Button
