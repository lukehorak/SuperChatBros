import React from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faBroadcastTower }        from '@fortawesome/free-solid-svg-icons'

module.exports = function MessageList(props){
  const messages = (props.connected ? props.messages : <FontAwesomeIcon icon={faBroadcastTower}/>);

  return (
    <main className="messages">
      {messages}
    </main>
  );
}
