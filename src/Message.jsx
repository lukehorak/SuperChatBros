import React from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////
// Private Methods
///////////////////////////////////////////////////////////////////////////////////////////////////
const randomKeyGen = () => {
  return Math.floor(Math.random() * 1000000).toString()
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Component Function Export
///////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = function Message(msgObj) {
  const { username, content, system } = msgObj;
  if(system){
    return(
      <div className="message system" key={randomKeyGen()}>
        {username} {content}
      </div>
    )
  }
  return (
    <div className="message" key={randomKeyGen()}>
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
    </div>
  )
}

