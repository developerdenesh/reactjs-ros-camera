import './App.css';
import Camera from './rosbridge/camera.js'
import ToggleConnect from './rosbridge/toggleconnect';
import EchoTopic from './rosbridge/echotopoic';
import { ROS } from 'react-ros'

function App() {
  return (
    <div className="App">
      <h1>Robot's perspective</h1>
      <Camera />
      <ROS>
        <ToggleConnect />
        <EchoTopic />
      </ROS>
    </div>
  );
}

export default App;