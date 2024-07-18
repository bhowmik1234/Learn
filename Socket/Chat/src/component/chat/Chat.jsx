import React, { useEffect, useState } from 'react'
import "./chat.css";
import {user}  from "../Join/Join"
import socketIO from "socket.io-client";
import sendLogo from "../../assets/send.png"
import Message from '../Message/Message';
import ReactScrollToBottom from "react-scroll-to-bottom"
import closeIcon from "../../assets/closeIcon.png"

const ENDPOIN = "http://localhost:2000";
let socket;

const Chat = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState([1,2,3,4,5,6])

    const send = ()=>{
        const message = document.getElementById('chatInput').value;
        socket.emit("message", {message, id});
        document.getElementById('chatInput').value="";
    }

    
    useEffect(()=>{
        socket = socketIO(ENDPOIN, {transports:['websocket']});

        socket.on("connect", ()=>{
            // alert("socket connect.")
            setId(socket.id);
        })

        socket.emit("joined", {user})
        socket.on('welcome', (data)=>{
            setMessage([...message, data]);
            console.log(data.user, data.message);
        });

        socket.on('userJoined', (data)=>{
            setMessage([...message, data]);
            console.log(data.user, data.message);
        })

        socket.on('leave', (data)=>{
            setMessage([...message, data]);
            console.log(data.user, data.message);
        })
        return ()=>{
            socket.emit("disconnect");
            socket.off();
        }
    }, [])

    useEffect(()=>{
        socket.on("sendMessage", (data)=>{
            setMessage([...message, data]);
            console.log(data.user, data.message, data.id);
        })
        return ()=>{
            socket.off();
        }
    }, [message])

  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'>
                <h2>Chat App</h2>
                <a href="/"><img src={closeIcon} alt="close" /></a>
            </div>
            <ReactScrollToBottom className='chatBox'>
                {
                    message.map((element, i)=>(
                        <Message key={i} user={element.id === id?"": element.user} message={element.message} classs={element.id === id?"right": "left"}/>
                    ))
                }
            </ReactScrollToBottom>
            <div className='inputBox'>
                <input type="text" id="chatInput" placeholder='chat..'/>
                <button onClick={send} className='sendBtn'>{<img src={sendLogo} alt="Send"/>}</button>
            </div>
        </div>
    </div>
  )
}

export default Chat