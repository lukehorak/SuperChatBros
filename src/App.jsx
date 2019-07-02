import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import Navbar from './Navbar.jsx';
import Chatbar from './Chatbar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    // Emulate loading time for now
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000)
  }

  render() {
    const messageList = (this.state.loading ? <h1>loading...</h1> : <MessageList />);
    return (
      <div>
        <Navbar />
        {messageList}
        <Chatbar />
      </div>
    );
  }
}
export default App;
