///////////////////////////////////////////////////////////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import MessageList          from './MessageList.jsx';
import Navbar               from './Navbar.jsx';
import Chatbar              from './Chatbar.jsx';
import MessageComponent              from './MessageComponent.jsx';

///////////////////////////////////////////////////////////////////////////////////////////////////
// Component Class Definition
///////////////////////////////////////////////////////////////////////////////////////////////////

const welcomeMessage = {
  content:'Welcome to Super CHAT Bros!',
  type:'system-notification',
  id: 'StartMessage'
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Lvl 1 CPU',
      userID: null,
      connected: true,
      messages: [MessageComponent(welcomeMessage)],
      userCount: 0
    }
  }
  
  changeUser = (oldName, newName) => {
    this.setState({ currentUser: newName });
    const messageData = {
          username: oldName,
          content: `has changed their name to ${newName}`,
          type: 'system-notification'
        }
        this.socket.send(JSON.stringify(messageData))
        this.socket.send(JSON.stringify({type:"system", content:"user-change", username:newName}))
  }

  sendMessage = (messageData) => {
    this.socket.send(JSON.stringify(messageData));
  }

  

  // nameChange = (newName) => {
  //   const messageData = {
  //     username: newName,
  //     content: 'has entered the chat!',
  //     type: 'system'
  //   }
  //   this.socket.send(JSON.stringify(messageData))
  // }

  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = () => {
      console.log('Connection established to socket');
      this.setState({connected: true})
      this.socket.send(JSON.stringify({type:"system", content:"user-change", username:this.state.currentUser}))
    }

    this.socket.onmessage = (event) => {
      const messageObject = JSON.parse(event.data);
      // System Message indicating user count change
      if (messageObject.type === 'system'){
        this.setState({userCount: messageObject.numUsers})
      }
      else if(messageObject.type === 'set-id'){
        this.setState({userID: messageObject.ownerID})
      }
      else{
        messageObject.currentID = this.state.userID;
        const newMessage = MessageComponent(messageObject);
        const messages = this.state.messages.concat(newMessage)
        this.setState({ messages })
      }
    }

    this.socket.onerror = () => {
      console.warn('An error occurred connecting to the Websocket');
      this.setState({connected: false})
    }

  }

  render() {
    return (
      <div>
        <Navbar userCount={this.state.userCount} align="middle"/>
        <MessageList messages={this.state.messages} connected={this.state.connected} />
        <Chatbar changeUser={this.changeUser} currentUser={this.state.currentUser} sendMessage={this.sendMessage} />
      </div>
    );
  }
}
export default App;
