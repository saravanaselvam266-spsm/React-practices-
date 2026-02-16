import React, { useState } from "react";

const NumberAdding = () => {
  const outputBox = {
    backgroundColor: "wheat",
    border: "1px solid black",
    borderRadius: "8px",
    width: "150px",
    height: "100px",
    marginTop: "30px",
  };

  const [userInput, setUserInput] = useState(null);
  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    // it should be a number
    let result = event.target.value;

    result = parseInt(result);

    if (isNaN(result) == true) {
      alert("Invalid Number Combination");
    } else {
      if (result > 50) alert("You have entered value more than 50");
      else if (result < 0) {
        alert("You have entered value less than zero");
      } else setUserNumber(result);
    }
  };

  const handleClick = () => {
    setValue((prev) => {
      console.log(prev);
      return [...prev, userInput];
    });
    setUserInput("");
    console.log("I have Modified")
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter number between 0 to 50"
          onChange={handleChange}
          value={userInput}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div style={outputBox}>{value}</div>
    </div>
  );
};

export default NumberAdding;
