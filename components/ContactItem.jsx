import React, {Component} from 'react';
import classnames from 'classnames';
import ContactTextInput from './ContactTextInput';
import { List, grey200, grey400, ListItem, Avatar, MoreVertIcon, RaisedButton, IconButton, IconMenu, MenuItem } from 'material-ui';

const contactStyle = {
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
    let editState = !this.state.editing;
    this.setState({editing: editState});
  }

  handleEditSave(id, person) {
    let editState = !this.state.editing;
    this.setState({editing: editState});
    this.props.editContactAction(id, person);
  }

  handleDelete(id) {
    this.props.deleteContactAction(id);
  }

  render() {
    const {contact} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <div>
          <ContactTextInput
            name={contact.person.name}
            email={contact.person.email}
            surname={contact.person.surname}
            editing={this.state.editing}
            contactBtn={false}
            contactID={contact.id}
            onEditCancel={this.handleEdit.bind(this)}
            onSave={(id, person) => this.handleEditSave(id, person)}
          />
        </div>
      );
    } else {
      element = (
        <List>
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
      <div style={contactStyle} className={classnames({
        'editing': this.state.editing,
        'contact-panel': true
      })}>
        {element}
      </div>
    );
  }
}

export default ContactItem;



