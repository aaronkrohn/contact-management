import React, {Component} from 'react';
import ContactItem from './ContactItem';
import {Checkbox, List} from 'material-ui';

const defaultStyle = {
  width: 300,
  marginLeft: 20
};

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {contacts, actions} = this.props;
    console.log('actions ', actions);

    return (
      <section className="main" style={defaultStyle}>
        <List className="contact-list">
          {contacts.map(contact =>
            <ContactItem key={contact.id} contact={contact} {...actions} />
          )}
        </List>
      </section>
    );
  }
}

export default MainSection;
