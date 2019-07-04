import React from 'react';
import messageTime from './lib/messageAge';



///////////////////////////////////////////////////////////////////////////////////////////////////
// Component Function Export
///////////////////////////////////////////////////////////////////////////////////////////////////

function sysMessage(msgObj) {
  const { username, content, timestamp } = msgObj;
  return(
    <div className="message system" key={msgObj.id}>
      {username} {content} <p className="timestamp">{messageTime(timestamp)}</p>
    </div>
  )
}

module.exports = function MessageComponent(msgObj) {
  const { username, content, type, timestamp, ownerID, currentID } = msgObj;

  const divClass = (ownerID === currentID ? "message mine" : "message")

  //console.log(`isMyMessage? ${username}=>>`, isMine)
  if(type === 'system-notification' || type === 'system'){
    return(
      sysMessage(msgObj)
    )
  }
  return (
    <div className={divClass} key={msgObj.id}>
      <div className="user-and-content">
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
      </div>
      <p className="timestamp">{messageTime(timestamp)}</p>
        
    </div>
  )
}

