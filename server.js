const express = require('express');
const Websocket = require('ws');

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

const wss = new Websocket.Server({server});

wss.on('connection', (ws) =>{
    console.log('client is connected');

    ws.on('message received', (message) =>{
        console.log(`message received , ${message}`);
    })

    ws.forEach((client) => {
        if (client.readyState ===Websocket.OPEN){
            client.send(message); 
        }
    })

    ws.on('close', () => {
        console.log(`client is disconnected`);
    })
})
