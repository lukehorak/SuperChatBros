import React from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////
// Component Function Export
///////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = function Message(msgObj) {
  const { username, content, type } = msgObj;
  if(type === 'system'){
    return(
      <div className="message system" key={msgObj.id}>
        {username} {content}
      </div>
    )
  }
  return (
    <div className="message" key={msgObj.id}>
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
    </div>
  )
}

