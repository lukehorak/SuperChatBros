import React, {Component} from 'react';
import  MessageList  from './MessageList.jsx';
import  Navbar  from './Navbar.jsx';
import Footer from './Footer.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MessageList />
        <Footer />
      </div>
    );
  }
}
export default App;
