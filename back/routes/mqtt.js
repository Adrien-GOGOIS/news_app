const express = require("express");
const app = express();
const router = express.Router();

const mqtt = require('mqtt') 
const client = mqtt.connect("mqtt://test.mosquitto.org") 
const topicName = 'news_app' 


const axios = require('axios').default;

router.get('/', async(req, res) => {
    client.on('connect', function () {
        client.subscribe('presence', function (err) {
            if (!err) {
                client.publish('Hello mqtt')
                console.log("Message published")
            }
        })
    })

    client.on('message', function (topic, message) {
        // message is Buffer
        console.log(message.toString())
        //client.end()
    })
})


module.exports = router;