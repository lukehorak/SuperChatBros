import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Options from './Options.jsx'


class Chatbar extends Component {

  // _handleChange = (e) => {
  //   this.props.nameChange(e.target.value);
  // }

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
      // const content = `${this.props.currentUser} has changed their name to ${e.target.value}`
      this.props.changeUser(this.props.currentUser, e.target.value)
    }
  }

  render() {
    return (
      <footer className="chatbar" >
        <input name="username" className="chatbar-username" defaultValue="Lvl 1 CPU" onKeyDown={this._handleName}/>
          {/* <fieldset >
            <select onChange={this._handleChange} name="username" id="character" className="chatbar-username">
              {Options()}
            </select>
          </fieldset> */}
        <form onSubmit={this._handleSubmit}>
          
          <input name="content" className="chatbar-message" placeholder="Type a message and hit ENTER" />
          <button><FontAwesomeIcon icon={faComment} /></button>
        </form>
      </footer>
    );
  }
}
export default Chatbar;

