import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'


class Chatbar extends Component {

  _handleSubmit = (e) => {
    e.preventDefault();
    const { content } = e.target.elements;
    const username = e.target.parentNode.firstChild
    const messageData = { username: username.value, content: content.value, type:"chat-message" }
    this.props.sendMessage(messageData);
    e.target.elements.content.value = '';
  }
  _handleName = (e) => {
    if (e.key === 'Enter'){
      this.props.changeUser(this.props.currentUser, e.target.value)
    }
  }

  render() {
    return (
      <footer className="chatbar" >
        <input name="username" className="chatbar-username" defaultValue="Lvl 1 CPU" onKeyDown={this._handleName}/>
        <form onSubmit={this._handleSubmit}>
          
          <input name="content" className="chatbar-message" placeholder="Type a message and hit ENTER" />
          <button><FontAwesomeIcon icon={faComment} /></button>
        </form>
      </footer>
    );
  }
}
export default Chatbar;

