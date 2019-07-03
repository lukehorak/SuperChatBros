import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import Options from './Options.jsx'
///////////
// Options
///////////

class Chatbar extends Component {

  _handleChange = (e) => {
    this.props.nameChange(e.target.value);
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    const { username, content } = e.target.elements;
    const messageData = { username: username.value, content: content.value, type:"chat-message" }
    this.props.sendMessage(messageData);
    e.target.elements.content.value = '';
  }

  render() {
    return (
      <footer className="chatbar" >
        <form onSubmit={this._handleSubmit}>
          <fieldset >
            <select onChange={this._handleChange} name="username" id="character" className="chatbar-username">
              {Options()}
            </select>
          </fieldset>
          <input name="content" className="chatbar-message" placeholder="Type a message and hit ENTER" />
          <button><FontAwesomeIcon icon={faComment} /></button>
        </form>
      </footer>
    );
  }
}
export default Chatbar;

