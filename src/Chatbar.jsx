import React, { Component } from 'react';

class Chatbar extends Component {

  render() {
    return (
      <footer className="chatbar" onKeyDown={this.props.keydown}>
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default Chatbar;

