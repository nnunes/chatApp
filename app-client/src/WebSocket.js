// WebSocket.js

import React, { createContext } from 'react'
import { useDispatch } from 'react-redux';
import { connectSuccess, connectError, updateChatLog} from './actions';

const Stomp = require('stompjs')
const SockJS = require('sockjs-client')

const WebSocketContext = createContext(null)
export { WebSocketContext }

export default ({ children }) => {
    let stompClient = null;;
    let ws;

    const dispatch = useDispatch();

    const sendMessage = (type, value, username) => {
      const chatMessage = {
        sender: username,
        content: value,
        type: type
      };
      // send public message
      stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
    }

    const addUser = (username) => {
      stompClient.send("/app/addUser", {}, JSON.stringify({ sender: username, type: 'JOIN' }))
    }

    const onSuccess = () => {
      dispatch(connectSuccess());

      // Subscribing to the public topic
      stompClient.subscribe('/topic/pubic', onMessageReceived);      
    }

    const onError = (e) => {
      dispatch(connectError(e));
    }

    const onMessageReceived = (payload) => {
      const data = JSON.parse(payload.body);

      if (data.type === 'TYPING') {
        return;
      }
      const message = {
        message: data.content,
        sender: data.sender,
        dateTime: data.dateTime,
        type: data.type
      };
      dispatch(updateChatLog(message));
    }

    if (!stompClient) {
        const SockJSClient = new SockJS('/ws')
        stompClient = Stomp.over(SockJSClient);
        stompClient.connect({}, onSuccess, onError);

        ws = {
            stompClient,
            sendMessage,
            addUser
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}