import React, { Component } from 'react';
import classnames from 'classnames';
import { ListItem, IconButton, IconMenu, MenuItem } from 'material-ui';

class ContactItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  render() {
    const { contact } = this.props;
    const name = `${contact.person.name} ${contact.person.surname}  ${contact.person.email}`;

    return (
      <div className={classnames({editing: this.state.editing})}>
        <ListItem primaryText={name} />
      </div>
    );
  }
}

export default ContactItem;
