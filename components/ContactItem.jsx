import React, {Component} from 'react';
import classnames from 'classnames';
import ContactTextInput from './ContactTextInput';
import { List, grey200, grey400, ListItem, Avatar, MoreVertIcon, RaisedButton, IconButton, IconMenu, MenuItem } from 'material-ui';

const listStyle = {
  background: '#f7f7f7',
  marginTop: 5
}

class ContactItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleEdit() {
    this.setState({editing: true});
  }

  handleEditCancel() {
    this.setState({editing: false});
  }


  handleDelete(id) {
    this.props.deleteContactAction(id);
  }

  render() {
    const {contact} = this.props;
    console.log('contact ', contact);


    let element;
    if (this.state.editing) {
      element = (
        <div>
          <ContactTextInput
            text={contact.person}
            editing={this.state.editing}
            onSave={(text) => this.handleSave(contact.id, text)}
          />
          <RaisedButton
            onClick={this.handleEditCancel.bind(this)}
            label="Cancel edit"
            primary={false}
          />
        </div>
      );
    } else {
      element = (
        <List style={listStyle}>
          <RaisedButton
            onClick={this.handleDelete.bind(this, contact.id)}
            label="Delete Contact"
            primary={true}
          />
          <RaisedButton
            onClick={this.handleEdit.bind(this)}
            label="Edit Contact"
            primary={false}
          />
          <ListItem
            leftAvatar={<Avatar src="https://1x.com/images/profile/-square.jpg"/>}
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



