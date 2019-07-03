import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const characters = ['Mario', 'Luigi', 'Yoshi', 'Kirby', 'Fox', 'Link', 'Samus', 'Ness', 'Donkey Kong', 'Pikachu', 'Jigglypuff', 'Captain Falcon', ]

function Options(charList){
  const componentList = [];
  charList.forEach(char => {
    componentList.push(<option key={char} value={char}>{char}</option>)
  })
  return componentList;
}

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
          <fieldset >
            <select name="username" id="character" className="chatbar-username">
              {Options(characters)}
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

