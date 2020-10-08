import React from 'react';
import moment from 'moment'
import './Message.css'

const Message = ({ msg, isOwn }) => {
  
  return (
    <li className={isOwn ? "message message__own" : "message"}>
      {!isOwn &&
        <div>
          <span className="message__sender">{msg.sender}</span>
          <div className="message__triangle"></div>
        </div>
      }

      <div className="message__content"> {msg.message} </div>
      <p className="message__date">{moment(msg.dateTime).format("llll")}</p>
    </li>
  )
}

export default Message;