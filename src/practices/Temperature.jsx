import React from "react";
import { useState } from "react";
import Display_temp from './Display_tem'
import '../App.css'

const Temperature = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="tem">
        <h1>Select Your Range of Temperature</h1>
        <input type="number" onChange={handleChange} />
        <p>Current Temperature is {value}°c</p>
        <Display_temp/>
      </div>
    </>
  );
};

export default Temperature;
