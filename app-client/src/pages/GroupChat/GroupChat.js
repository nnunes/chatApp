import React, { useContext } from 'react';
import { useSelector } from 'react-redux'

import Login from '../../components/login'
import Loader from '../../components/loader'
import Error from '../../components/error'
import Chat from '../../components/chat'

import { WebSocketContext } from '../../WebSocket';

const GroupChat = () => {
    const username = useSelector(state => state.username);
    const error = useSelector(state => state.error);
    const connected = useSelector(state => state.connected);

    const ws = useContext(WebSocketContext);

    //TODO add different chat rooms
    //TODO add private messages
    if (error) {
      return <Error />
    }
    if (!connected) {
      return <Loader />
    }
    if (!username) {
      return <Login ws={ws}/>
    }
    return (
        <Chat ws={ws} username={username}/>
    )
}

export default GroupChat;
