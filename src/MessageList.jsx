import React, { Component } from 'react';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    // Resolve loading time
    const messages = (this.props.loading ? <h1>loading...</h1> : this.props.messages);
    return (
      <main className="messages">
        {messages}
      </main>
    );
  }
}
export default MessageList;


