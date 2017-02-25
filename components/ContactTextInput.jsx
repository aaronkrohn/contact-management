import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

const defaultStyle = {
  paddingLeft: 20
};
const style = {
  padding: 15
};

class ContactTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text1: this.props.text || '',
      text2: this.props.text || '',
      text3: this.props.text || ''
    };
  }

  handleClick() {
    const {name, surname, email} = this.refs;
    const person = {
      name: name.input.value.trim(),
      surname: surname.input.value.trim(),
      email: email.input.value.trim()
    }
    console.log('click ', person);
    this.props.onSave(person);

    if (this.props.newContact) {
      this.setState({
        text1: '',
        text2: '',
        text3: ''
      });
    }
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
    return (
      <div>
        <TextField ref="name"
                   id='new-contact-input-name'
                   style={defaultStyle}
                   type="text"
                   value={this.state.text1}
                   autoFocus="true"
                   hintText="Name"
                   onChange={this.handleChange.bind(this)}/>

        <TextField ref="surname"
                   id='new-contact-input-surname'
                   style={defaultStyle}
                   type="text"
                   value={this.state.text2}
                   autoFocus="true"
                   hintText="Surname"
                   onChange={this.handleChange.bind(this)}/>

        <TextField ref="email"
                   id='new-contact-input-email'
                   style={defaultStyle}
                   type="text"
                   value={this.state.text3}
                   autoFocus="true"
                   hintText="Email"
                   onChange={this.handleChange.bind(this)}/>

        <div style={style}>
          <RaisedButton onClick={this.handleClick.bind(this)}
                        label="Add contact"
                        primary={true}
                        fullWidth={true}/>
        </div>
      </div>
    );
  }
}

export default ContactTextInput;
