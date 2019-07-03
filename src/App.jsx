///////////////////////////////////////////////////////////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import MessageList          from './MessageList.jsx';
import Navbar               from './Navbar.jsx';
import Chatbar              from './Chatbar.jsx';
import Message              from './Message.jsx';

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

  sendMessage = (messageData) => {
    this.socket.send(JSON.stringify(messageData));
  }

  nameChange = (newName) => {
    const messageData = {
      username: newName,
      content: 'has entered the chat!',
      type: 'system'
    }
    this.socket.send(JSON.stringify(messageData))
  }

  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = () => {
      console.log('Connection established to socket');
      const demoMessage = {
        username:'',
        content:'Welcome to Super CHAT Bros!',
        type:'system',
        id: '1c7f2ba0-544c-4073-9cbb-5a6a1791acd6'
      }
      this.socket.send(JSON.stringify(demoMessage))
      this.setState({connected: true})
    }

    this.socket.onmessage = (event) => {
      const newMessage = Message(JSON.parse(event.data));
      const messages = this.state.messages.concat(newMessage)
      this.setState({ messages })
    }

    this.socket.onerror = () => {
      console.warn('An error occurred connecting to the Websocket');
      this.setState({connected: false})
    }

  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} connected={this.state.connected} />
        <Chatbar currentUser={this.state.currentUser} sendMessage={this.sendMessage} nameChange={this.nameChange}/>
      </div>
    );
  }
}
export default App;
