import React, {Component} from 'react';
import {TextField, RaisedButton} from 'material-ui'

const defaultStyle = {
  paddingLeft: 20
};
const style = {
  marginLeft: 20,
  marginTop: 15
};
const wrapperStyle = {
  width: 300
};

class ContactTextInput extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text1: this.props.name || '',
      text2: this.props.surname || '',
      text3: this.props.email || ''
    };
  }

  handleClick() {
    const {name, surname, email} = this.refs;
    const person = {
      name: name.input.value.trim(),
      surname: surname.input.value.trim(),
      email: email.input.value.trim()
    }

    this.props.onSave(person);

    if (this.props.newContact) {
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

  handleEditCancel(){
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
        <div style={style}>
          <RaisedButton
            onClick={this.handleClick.bind(this)}
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
          <RaisedButton
            onClick={this.handleEditSave.bind(this)}
            label="Save"
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
      <div style={wrapperStyle}>
        {SaveEditBtn}
        <TextField
          ref="name"
          id='new-contact-input-name'
          style={defaultStyle}
          type="text"
          value={this.state.text1}
          autoFocus="true"
          hintText="Name"
          onChange={this.handleChange.bind(this)}
        />

        <TextField
          ref="surname"
          id='new-contact-input-surname'
          style={defaultStyle}
          type="text"
          value={this.state.text2}
          autoFocus="true"
          hintText="Surname"
          onChange={this.handleChange.bind(this)}
        />

        <TextField
          ref="email"
          id='new-contact-input-email'
          style={defaultStyle}
          type="text"
          value={this.state.text3}
          autoFocus="true"
          hintText="Email"
          onChange={this.handleChange.bind(this)}
        />

        {AddContactbtn}
      </div>
    );
  }
}

export default ContactTextInput;
