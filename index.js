const start = require("./api")

async function wpResponse(msjRes) {
    try {
        const client = await start()
        client.on('message', message => {
            if (message.body.startsWith("gpt:")) {
                client.sendMessage(message.from, msjRes)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

wpResponse('TEST')