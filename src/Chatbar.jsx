import React, { Component } from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faComment }        from '@fortawesome/free-solid-svg-icons'

class Chatbar extends Component {

  _handleSubmit = (e) => {
    e.preventDefault();
    const { username, content } = e.target.elements;
    const messageData = { username: username.value, content: content.value }
    this.props.sendMessage(messageData);
    e.target.elements.content.value = '';
  }

  render() {
    return (
      <footer className="chatbar" >
        <form onSubmit={this._handleSubmit}>
          <input name="username" className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser}/>
          <input name="content" className="chatbar-message" placeholder="Type a message and hit ENTER" />
          <button><FontAwesomeIcon icon={faComment}/></button>
        </form>
      </footer>
    );
  }
}
export default Chatbar;

