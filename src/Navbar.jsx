import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">

        <a href="/" className="navbar-brand"><img className="navbar-image" src="/styles/SuperChatBrosLogo.png"/></a>
        <h3>Current Challengers: {this.props.userCount}</h3>
      </nav>
    );
  }
}
export default Navbar;


