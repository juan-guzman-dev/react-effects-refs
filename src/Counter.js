import React, { useState, useEffect } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(n => n + 1);
    console.log("RENDERING")
  };

  useEffect(() => {
    console.log("THIS PRINTS AFTER EVERY RENDER")
    document.title = `Hi${'!'.repeat(num)}`
  })

  return (

    <div>
      <strong>Example 1:</strong>
      <p>  In this example, when we increment <i>num</i> (state) we want the document title to have <i>num</i> number of exclamation points.</p>
      <br></br>
      Let's get excited:
      <br></br>
      <br></br>
      <button onClick={increment}>Get more excited.</button>
      <p>Exclamation points: {num}</p>
    </div>
  );
}
export default Counter;