import React, { useState, Fragment } from 'react';
import { useEffect } from 'react';

const mqtt    = require('mqtt/dist/mqtt');

const options = {
	protocol: 'mqtts',
	clientId: 'b0908853' 	
};

const client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);

// MQTT topic :
client.subscribe('presence');

// Terminal : npx mqtt pub -t 'news_app' -h 'test.mosquitto.org' -m 'it works!'

function Mqtt() {

    const [message, setMessage] = useState("Open a terminal : npx mqtt pub -t 'news_app' -h 'test.mosquitto.org' -m 'it works!'");

    const handleClick = () => {
        client.on('message', function (topic, message) {
            console.log(topic)
            setMessage(message.toString());
        });
    }

    const changeMessage = () => {
        client.publish("presence", "New message")
        console.log("Message changed")
    }

    const disconnect = () => {
        client.end();
        console.log("Connexion ended")
    }

    return (
        <div className="App">
            <button onClick={handleClick}>Connexion</button>
            <button onClick={changeMessage}>Change message</button>
            <button onClick={disconnect}>Disconnect</button>
            <p>Message reçu: <span className='text-white'>{message}</span></p>
            <p>{}</p>
        </div>
    );
}

export default Mqtt;