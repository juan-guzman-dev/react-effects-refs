import React, { useState, useRef, useEffect } from "react";

function Video({
  src = "https://media.giphy.com/media/KctGIT2JHvVRC7ESeR/giphy.mp4"
}) {
  const [speed, setSpeed] = useState(1);
  const videoRef = useRef();
  console.log(videoRef)
  useEffect(() => {
    videoRef.current.playbackRate = speed;
  }, [speed])
  return (
    <div>
      <strong>Example 4:</strong>
      <p>We want to incr/decr the speed of the video when the buttons are clicked.</p>
      <video muted autoPlay loop ref={videoRef}>
        <source src={src} />
      </video>
      <div>
        <button onClick={() => setSpeed(s => s / 2)}>slow</button>
        <button onClick={() => setSpeed(s => s * 2)}>fast</button>
        <p>Current speed: {speed}x</p>
      </div>
    </div>
  );
}

export default Video;
