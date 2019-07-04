import React from 'react';
import timeAgo from './lib/messageAge';
///////////////////////////////////////////////////////////////////////////////////////////////////
// Component Function Export
///////////////////////////////////////////////////////////////////////////////////////////////////

function sysMessage(msgObj) {
  const { username, content, timestamp } = msgObj;
  return(
    <div className="message system" key={msgObj.id}>
      {username} {content} <p className="timestamp">{timeAgo(timestamp)}</p>
    </div>
  )
}

module.exports = function MessageComponent(msgObj, isMyMessage) {
  const { username, content, type, timestamp, ownerID } = msgObj;
  // console.log("isMyMessage? =>>", isMyMessage(ownerID))
  if(type === 'system-notification' || type === 'system'){
    return(
      sysMessage(msgObj)
    )
  }
  return (
    <div className="message" key={msgObj.id}>
      <div>
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
      </div>
      <p className="timestamp">{timeAgo(timestamp)}</p>
        
    </div>
  )
}

