import React from 'react';
import Timer from "./Timer"
import Timer2 from "./Timer2"
import TimerWrapper from "./TimerWrapper"
import Video from "./Video"
import Focuser from "./Focuser"
import Counter from "./Counter";
import ProfileViewer from "./ProfileViewer";
import ProfileViewerWithSearch from './ProfileViewerWithSearch'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Effects and Refs</h1>
      <p>React effects with <b>useEffect</b> and <b>useRef</b>.</p>
      <hr></hr>
      <Counter />
      <hr></hr>
      <ProfileViewer name="juan-guzman-dev" color="teal" />
      {/* <ProfileViewer name="Matt" color="orange" /> */}
      <hr></hr>
      <ProfileViewerWithSearch />
      <hr></hr>
      <Video />
      <hr></hr>
      <Focuser />
      <hr></hr>
      <Timer2 />
      <hr></hr>
      <TimerWrapper />
    </div>
  );
}

export default App;
