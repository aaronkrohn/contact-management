import React, { Component } from 'react';
import TextField from 'material-ui/TextField'

const defaultStyle = {
  marginLeft: 20
};

class ContactTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      const text = e.target.value.trim();
      this.props.onSave(text);
    }
  }

  render() {
    return (
      <div>
        <TextField onKeyDown={this.handleEnter.bind(this)}
                   id='new-contact-input'
                   style={defaultStyle}
                   type="text"
                   autoFocus="true"
        />
      </div>
    );
  }
}

export default ContactTextInput;
