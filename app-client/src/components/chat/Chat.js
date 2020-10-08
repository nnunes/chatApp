import React from 'react';
import { useSelector } from 'react-redux'

import Footer from '../../components/footer'
import Message from '../../components/message'
import Notification from '../../components/notification'

import './Chat.css';

const Chat = ({ ws, username }) => {
    const chats = useSelector(state => state.chatLog);

    return (
        <div className="chat-app">
            <ul className="chat">
              {chats.map((msg, i) =>
                <div key={i}>
                  {(msg.type === 'JOIN' || msg.type === 'LEAVE') && 
                    <Notification msg={msg} />
                  }
                  {msg.type === 'CHAT' && 
                    <Message msg={msg} isOwn={username === msg.sender} />
                  }
                </div >
              )}
            </ul>
            <Footer ws={ws} username={username}/>
        </div>
      )
}

export default Chat;
