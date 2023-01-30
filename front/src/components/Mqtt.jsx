import React, { useState, Fragment } from 'react';
import { useEffect } from 'react';

const mqtt    = require('mqtt/dist/mqtt');

const options = {
	protocol: 'mqtts',
	clientId: 'b0908853' 	
};

const client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);

// MQTT topic :
client.subscribe('news_app');

function Mqtt() {

    const [connectionStatus, setConnectionStatus] = useState(false);
    const [messages, setMessages] = useState(["Open a terminal : npx mqtt pub -t 'news_app' -h 'test.mosquitto.org' -m 'it works!'"]);
    const [userInput, setUserInput] = useState();

    useEffect(() => {
    client.on('connect', () => setConnectionStatus(true));
    client.on('message', (topic, payload, packet) => {
        setMessages(messages.concat(payload.toString()));
    });
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        client.publish('news_app', `${userInput}`)
    }

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    return (
    <>
        <form>
            <input type='text' placeholder='ajouter un message' onChange={handleChange}/>
            <button onClick={handleSubmit}>Load</button>
        </form>
        
        {connectionStatus ? <p>Connecté !</p> : <p>Déconnecté</p>}
        <div></div>
        <div className="App">
            {messages.map((message) => (
                <h2 key={message} className='text-white'>{message}</h2>
            ))}
        </div>
    </>

    );
}

export default Mqtt;