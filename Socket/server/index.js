const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const users = [{}];

app.get('/', (req, res)=>{
    res.send("Server is working")
})

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket)=>{
    console.log("new connection.");
    socket.on("joined", ({user})=>{
        users[socket.id] = user;
        console.log(`user is ${user}`)
        socket.emit('welcome', {user:"Admin", message: `${users[socket.id]}, Welocme to the chat.`})
        socket.broadcast.emit('userJoined', {user:"Admin", message: `${users[socket.id]} joined`});
    })

    socket.on('message', ({message, id})=>{
        io.emit("sendMessage", {user: users[id], message, id})
    })

    socket.on('disconnect', ()=>{
        socket.broadcast.emit('leave', {user: "Admin", message:`${users[socket.id]} left the Chat.`})
        console.log("user left");
    })

})


server.listen(2000, ()=>{
    console.log('serve is working on 2000.');
})