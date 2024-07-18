const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

const server = http.createServer();
const io = socketIo(server);

app.get('/', (req, res)=>{
    res.send("working on.")
})

server.listen(3000, ()=>{
    console.log('serve is working on 3000.');
})