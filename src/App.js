import './App.css';
import Camera from './rosbridge/camera.js'
import ToggleConnect from './rosbridge/toggleconnect';
import EchoTopic from './rosbridge/echotopoic';
import { ROS } from 'react-ros'

function App() {
  return (
    <div className="App">
      <h1>Hello there</h1>
      <ROS>
        <ToggleConnect />
        <EchoTopic />
      </ROS>
      <Camera />
    </div>
  );
}

export default App;