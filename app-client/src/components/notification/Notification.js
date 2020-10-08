import React from 'react';
import './Notification.css'

const Notification = ({ msg }) => {
  
  return (
    <li className="notification">
<div className="notification__content"> {msg.sender} {msg.type === 'JOIN' ? '~ joined' : ' left the channel'}</div>
    </li>
  )
}

export default Notification;