import React, { useMemo, useState } from 'react'
import Button from './Button';
 
const App = () => {
  console.log("App rendering");

  const[count, setCount] = useState(0)
  const[count10, setCount10] = useState(false)
  
const obj = useMemo(() => {
  return {id : 1, name : 'Ormon'}
}, [count10])

  return (
    <div>
      <button onClick={() => {setCount((prev) => prev+1), count == 10 ? setCount10(true) : null  }}>button</button>
      

<h1>{count}</h1>
   <Button text = {obj}>
    
   </Button>
     </div>



  )
}

export default App