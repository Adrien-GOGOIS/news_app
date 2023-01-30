const mqtt = require('mqtt') 
const client = mqtt.connect("mqtt://test.mosquitto.org") 
const topicName = 'test/connection' 

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})