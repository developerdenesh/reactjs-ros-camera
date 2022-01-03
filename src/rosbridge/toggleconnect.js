import React from 'react'
import { useROS } from 'react-ros'

function ToggleConnect() {
    let { isConnected, url, changeUrl, toggleConnection } = useROS();

    url = "ws://localhost:9090"
    let connected_text = "connected to " + url
    return (
        <div>
            <p>
                <b>Simple connect:  </b><button onClick={toggleConnection}>Toggle Connect</button>  <br />
                <b>Status of ROS:</b> {isConnected ? connected_text: "not connected"}   <br />
            </p>
        </div>
    );
}
export default ToggleConnect;