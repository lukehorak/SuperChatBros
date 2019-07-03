///////////////////////////////////////////////////////////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////////////////////////////////////////////////////////
/* eslint-disable no-console */
import React, { Component } from 'react';
import MessageList          from './MessageList.jsx';
import Navbar               from './Navbar.jsx';
import Chatbar              from './Chatbar.jsx';
import Message              from './Message.jsx';
import messageData          from '../demoMessages.json'; // Demo Messages

///////////////////////////////////////////////////////////////////////////////////////////////////
// Helper Functions
///////////////////////////////////////////////////////////////////////////////////////////////////

const getMessages = (msgList) => {
  const messages = [];
  msgList.forEach(messageObject => { messages.push(Message(messageObject)) })
  return messages;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Component Class Definition
///////////////////////////////////////////////////////////////////////////////////////////////////
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Lvl 1 CPU',
      loading: true,
      connected: true,
      messages: []//getMessages(messageData)
    }
  }

  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = () => {
      console.log('Connection established to socket');
      const demoMessage = { username:'Cpt. Falcon', content:'falconnnnnnn CHAT!', id: '1c7f2ba0-544c-4073-9cbb-5a6a1791acd6' }
      this.socket.send(JSON.stringify(demoMessage))
      this.setState({connected: true})

    }

    this.socket.onmessage = (event) => {

      // TODO - convert this to append rather than replace
      const messages = [Message(JSON.parse(event.data))];
      this.setState({ messages })
    }

    this.socket.onerror = () => {
      console.warn('An error occurred connecting to the Websocket');
      this.setState({loading: false, connected: false})
    }
  }

  sendMessage = (messageData) => {
    // const newIM = Message(messageData);
    // const messages = this.state.messages.concat(newIM);
    this.socket.send(JSON.stringify(messageData));
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} connected={this.state.connected} />
        <Chatbar currentUser={this.state.currentUser} sendMessage={this.sendMessage}/>
      </div>
    );
  }
}
export default App;
