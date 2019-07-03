import React, { Component } from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faBroadcastTower }        from '@fortawesome/free-solid-svg-icons'

class MessageList extends Component {

  constructor(props) {
    super(props);
    //this.state = { loading: true };
  }

  render() {
    // Resolve loading time
    const messages = (this.props.connected ? this.props.messages : <FontAwesomeIcon icon={faBroadcastTower}/>);
    return (
      <main className="messages">
        {messages}
      </main>
    );
  }
}
export default MessageList;


