import React, {Component} from 'react';
import classnames from 'classnames';
import {List, ListItem, Avatar, Divider, IconButton, IconMenu, MenuItem} from 'material-ui';

class ContactItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  render() {
    const { contact } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)}/>
      );
    } else {
      element = (
        <List>
          <ListItem
            leftAvatar={<Avatar src="https://1x.com/images/profile/-square.jpg" />}
            primaryText={contact.person.name}
            secondaryText="Name"
          />
          <ListItem
            insetChildren={true}
            primaryText={contact.person.surname}
            secondaryText="Surname"
          />
          <ListItem
            insetChildren={true}
            primaryText={contact.person.email}
            secondaryText="email"
          />
          <Divider inset={true} />
        </List>
      );
    }

    return (
      <div className={classnames({
        editing: this.state.editing
      })}>
        {element}
      </div>
    );
  }
}

export default ContactItem;



