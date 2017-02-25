import React, { Component } from 'react';
import ContactTextInput from './ContactTextInput';

import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  handleSave(text){
    console.log('handleSave ',text);
    const person = {name:text, surname: text, email: text}
    this.props.addContactAction(person);
  }

  render() {
    const { contacts } = this.props;

    return (
      <header className="header">
          <AppBar showMenuIconButton={false} title="Contact Management App" />
          <h1 style={defaultStyle}>Contacts</h1>
          <ContactTextInput
            newContact
            onSave={this.handleSave.bind(this)}
            placeholder="What needs to be done?" />
      </header>
    );
  }
}

export default Header;
