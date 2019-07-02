/* eslint-disable no-console */
import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import Navbar from './Navbar.jsx';
import Chatbar from './Chatbar.jsx';
import Message from './Message.jsx';
import SystemMessage from './SystemMessage.jsx'

const messageData = [
  { username: 'Pikachu', content: '*Spams Thunder*' },
  { username: 'Link', content: 'HYAAAAAA' },
  { username: 'Kirby', content: 'Om nom nom!' }
  ];

const getMessages = (msgList) => {
  // TODO [Refactor] - Refactor Message component to generate all types of messages
  const messages = [<SystemMessage key='s0' />];
  msgList.forEach(messageObject => {
    messages.push(Message(messageObject))
  })
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
      const newMessage = <Message key='simmed' username='Cpt. Falcon' content='falconnnnnnn CHAT!' type='message' />
      const messages = this.state.messages.concat(newMessage)
      console.log(messages)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages, loading: false})
    }, 1000);
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} loading={this.state.loading} />
        <Chatbar currentUser={this.state.currentUser} />
      </div>
    );
  }
}
export default App;
