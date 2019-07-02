/* eslint-disable no-console */
import React, { Component } from 'react';
import MessageList          from './MessageList.jsx';
import Navbar               from './Navbar.jsx';
import Chatbar              from './Chatbar.jsx';
import Message              from './Message.jsx';
import messageData          from '../demoMessages.json'; // Demo Messages

const getMessages = (msgList) => {
  // TODO [Refactor] - Refactor Message component to generate all types of messages
  const messages = [];
  msgList.forEach(messageObject => { messages.push(Message(messageObject)) })
  return messages;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Lvl 1 CPU',
      loading: true,
      messages: getMessages(messageData)
    }
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
      const newMessage = Message({ username:'Cpt. Falcon', content:'falconnnnnnn CHAT!' });
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      this.setState({ messages: messages, loading: false})
    }, 1000);
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      const messageData = {
        username: e.target.parentNode.firstChild.value,
        content: e.target.value
      }
      //console.log(`${messageData.user} says "${messageData.message}"`);
      const newIM = Message(messageData);
      console.log(newIM.props)
      const messages = this.state.messages.concat(newIM)
      // Update the state of the app component.
      this.setState({ messages: messages, loading: false})
      e.target.value = '';
      
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} loading={this.state.loading} />
        <Chatbar currentUser={this.state.currentUser} keydown={this._handleKeyDown}/>
      </div>
    );
  }
}
export default App;
