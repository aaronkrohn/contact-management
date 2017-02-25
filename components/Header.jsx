import React, { Component } from 'react';
import ContactTextInput from './ContactTextInput';

import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {

  handleSave(person){
    console.log('handleSave ', person);
    this.props.addContactAction(person);
  }

  render() {
    const { contacts } = this.props;

    return (
      <header className="header">
          <AppBar showMenuIconButton={false} title="Contact Management App" />
          <h3 style={defaultStyle}>Contacts</h3>
          <ContactTextInput
            newContact
            onSave={this.handleSave.bind(this)}
            placeholder="What needs to be done?" />
      </header>
    );
  }
}

export default Header;
