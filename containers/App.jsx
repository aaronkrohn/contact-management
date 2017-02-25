import React, {Component} from "react";
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ContactActions from '../actions/contacts';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // For Customization Options, edit  or use // './src/material_ui_raw_theme_file.jsx' as a template.
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
  const { contacts, actions } = this.props;
    console.log('contacts(state) ', contacts);
    console.log('ContactActions ', actions);

    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header contacts={contacts} addContactAction={actions.addContactAction} />
            <MainSection contacts={contacts} actions={actions} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ContactActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);