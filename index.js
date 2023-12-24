const start = require("./api")
const axios = require("axios")
require('dotenv').config()

async function wpResponse() {
    try {
        const client = await start()
        client.on('message', message => {
            if (message.body.startsWith("gpt:".toLowerCase())) {
                axios.post(`${process.env.API_URL}/api/ask`, message.body.slice(4))
                    .then(response => {
                        client.sendMessage(message.from, response)
                        console.log('Respuesta: ', response.data)
                    })
                    .catch(error => {
                        client.sendMessage(message.from, error.response.data.error)
                        console.error('Error: ', error.response.data.error)
                    })
            }
        })
    } catch (error) {
        console.log(error)
    }
}

wpResponse()