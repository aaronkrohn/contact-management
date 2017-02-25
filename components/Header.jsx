import React, { Component } from 'react';
import ContactTextInput from './ContactTextInput';

import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  handleSave(text){
    console.log('text ',text);
    this.props.addContactAction(text);
  }

  render() {
    const { contacts } = this.props;
    return (
      <header className="header">
          <AppBar showMenuIconButton={false} title="Contact Management App" />
          <h1 style={defaultStyle} >Contacts {contacts[0].id}</h1>
          <ContactTextInput
            onSave={this.handleSave.bind(this)}
            placeholder="What needs to be done?" />
      </header>
    );
  }
}

export default Header;
