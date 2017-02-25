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
    // this.state = {
    //   text: this.props.text || ''
    // };
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
  }

  render() {
    return (
      <div>
        <TextField ref="name"
                   id='new-contact-input'
                   style={defaultStyle}
                   type="text"
                   autoFocus="true"
                   hintText="Name"/>

        <TextField ref="surname"
                   id='new-contact-input'
                   style={defaultStyle}
                   type="text"
                   autoFocus="true"
                   hintText="Surname"/>

        <TextField ref="email"
                   id='new-contact-input'
                   style={defaultStyle}
                   type="text"
                   autoFocus="true"
                   hintText="Email"/>

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
