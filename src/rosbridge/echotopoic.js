// EchoTopic.js
import React, { useState, useEffect } from 'react'
import { useROS } from 'react-ros'


var listener = null;
function EchoTopic() {
    const { createListener, topics } = useROS();
    const [topic, setTopic] = useState('/');
    const [someImageURL, setSomeImageURL] = useState('')

    useEffect(() => {
        handleTopic(topic);
    });

    const unsubscribe = () => {
        if (listener) {
            console.log("Unsubscribing");
            listener.unsubscribe();
        }
    }

    const handleTopic = (topicInput) => {
        if (topic !== topicInput) {
            setTopic(topicInput);
            unsubscribe();
            return;
        }

        unsubscribe();

        listener = null;

        for (var i in topics) {
            if (topics[i].path === topicInput) {
                listener = createListener(topics[i].path,
                    topics[i].msgType);
                break;
            }
        }
        if (listener) {
            console.log("Subscribing to messages...");
            listener.subscribe(handleMsg);
        } else {
            console.log("Topic '" + topic + "' not found...make sure to input the full topic path - including the leading '/'");
        }
    }

    const handleMsg = (msg) => {
        setSomeImageURL("data:image/jpeg;base64," + msg.data)
    }
    return (
        <div>
            <b>Topic to echo:  </b><input name="topicInput" defaultValue={topic} onChange={event => handleTopic(event.target.value)} />  <br />
            <img src={someImageURL}></img>
        </div>
    );
}
export default EchoTopic;