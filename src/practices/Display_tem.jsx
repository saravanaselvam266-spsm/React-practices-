import React from 'react'
import { useState } from 'react';

const Display_tem = () => {

    const [count , setCount] = useState(0);

    const handleIncrement =() => {setCount((x) => x + 1)};
    const handleDecrement =() => {setCount((x) => x - 1)};


  return (
    <>
    <div>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
    </div>
    </>
  )
}

export default Display_tem;