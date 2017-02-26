import React, {Component} from 'react';
import {TextField, RaisedButton, orange500} from 'material-ui'

const style = {
  listWrapper: {
    width: 300
  },
  textField: {
    paddingLeft: 20
  },
  addContact: {
    marginLeft: 20,
    marginTop: 15
  }
}

class ContactTextInput extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text1: this.props.name || '',
      text2: this.props.surname || '',
      text3: this.props.email || ''
    };
  }

  handleAddContact() {
    const {name, surname, email} = this.refs;
    const fieldName = name.input.value.trim();
    const fieldSurname = surname.input.value.trim();
    const fieldEmail = email.input.value.trim();
    const person = {
      name: fieldName,
      surname: fieldSurname,
      email: fieldEmail
    }

    if (fieldName && fieldSurname && fieldEmail) {
      this.props.onSave(person);

      this.setState({
        text1: '',
        text2: '',
        text3: ''
      });
    }
  }

  handleEditSave() {
    const {name, surname, email} = this.refs;
    const person = {
      name: name.input.value.trim(),
      surname: surname.input.value.trim(),
      email: email.input.value.trim()
    }

    this.props.onSave(this.props.contactID, person);
  }

  handleEditCancel() {
    this.props.onEditCancel();
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'new-contact-input-name':
        return this.setState({text1: event.target.value});

      case 'new-contact-input-surname':
        return this.setState({text2: event.target.value});

      case 'new-contact-input-email':
        return this.setState({text3: event.target.value});
    }
  }

  render() {
    const {editing, contactBtn} = this.props;
    let AddContactbtn = null;
    let SaveEditBtn = null;

    if (contactBtn) {
      AddContactbtn = (
        <div style={style.addContact}>
          <RaisedButton
            onClick={this.handleAddContact.bind(this)}
            label="Add contact"
            primary={true}
            fullWidth={true}
          />
        </div>
      );
    } else {
      AddContactbtn = null;
    }

    if (editing) {
      SaveEditBtn = (
        <div style={style}>
          {/*Edit Mode*/}
          <RaisedButton
            onClick={this.handleEditSave.bind(this)}
            label="Save Contact"
            primary={true}
          />
          <RaisedButton
            onClick={this.handleEditCancel.bind(this)}
            label="Cancel edit"
            primary={false}
          />
        </div>
      );

    } else {
      SaveEditBtn = null;
    }

    return (
      <div style={style.listWrapper}>
        {SaveEditBtn}
        <TextField
          ref="name"
          id='new-contact-input-name'
          style={style.textField}
          type="text"
          value={this.state.text1}
          autoFocus="true"
          hintText="Name"
          onChange={this.handleChange.bind(this)}
        />

        <TextField
          ref="surname"
          id='new-contact-input-surname'
          style={style.textField}
          type="text"
          value={this.state.text2}
          autoFocus="false"
          hintText="Surname"
          onChange={this.handleChange.bind(this)}
        />

        <TextField
          ref="email"
          id='new-contact-input-email'
          style={style.textField}
          type="text"
          value={this.state.text3}
          autoFocus="false"
          hintText="Email"
          onChange={this.handleChange.bind(this)}
        />

        {AddContactbtn}
      </div>
    );
  }
}

export default ContactTextInput;
