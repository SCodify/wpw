const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

async function start() {
    const client = new Client()

    client.on('qr', qr => {
        qrcode.generate(qr, { small: true })
    })
    
    client.on('ready', () => {
        console.log('El cliente está listo!')
    })

    client.initialize()

    return client
}

module.exports = start