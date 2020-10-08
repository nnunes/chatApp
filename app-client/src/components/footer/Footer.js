import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import './Footer.css'

const Footer = ({ ws, username }) => {
    const [messageInput, setMessageInput] = useState('');

    return (
        <div className="footerComponent">
            <TextField
                className="footerComponent__input"
                label="Type your message here..."
                placeholder="Press enter to send message"
                onChange={(e) => {
                    setMessageInput(e.target.value);
                    ws.sendMessage('TYPING', e.target.value, username);
                }}
                margin="normal"
                value={messageInput}
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        setMessageInput('');
                        ws.sendMessage('CHAT', messageInput, username);
                    }
                }}
            />
            <button
                className="footerComponent__button"
                onClick={ () => {
                    setMessageInput('');
                    ws.sendMessage('CHAT', messageInput, username);
                }}> 
                Send 
            </button>
        </div>
    );
}

export default Footer;
