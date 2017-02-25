import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';

import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  handleSave(text){
    console.log(text);
    this.props.addContact(text);
  }

  render() {
    return (
      <header className="header">
          <AppBar showMenuIconButton={false} title="Contact Management App" />
          <h1 style={defaultStyle} >Contacts</h1>
          <TodoTextInput
            onSave={this.handleSave.bind(this)}
            placeholder="What needs to be done?" />
      </header>
    );
  }
}

export default Header;
