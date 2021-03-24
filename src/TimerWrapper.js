import React, { useState } from "react";
import Timer from "./Timer"

const TimerWrapper = () => {
  const [timerVisible, setTimerVisible] = useState(true);
  const toggleTimer = () => {
    setTimerVisible(!timerVisible);
  }
  return (
    <div>
      <strong>Example 7:</strong>
      <br></br>
      <br></br>
      <button onClick={toggleTimer}>Toggle Timer</button>
      {timerVisible && <Timer />}
    </div>
  )
}

export default TimerWrapper;