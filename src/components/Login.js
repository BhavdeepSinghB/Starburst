import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import LoginField from './Field.js';
import { withRouter } from 'react-router-dom';
import { onLogin } from '../actions';

class Login extends Component {
  render() {
    const loginStyle = {
      paddingTop: 35,
      //   textAlign: 'center',
    };

    return (
      <div style={loginStyle}>
        <div className="row">
          <div className="col s4 offset-s4">
            <div className="card darken-1">
              <div className="card-content">
                <span className="card-title">Sign in</span>
                <form
                  onSubmit={this.props.handleSubmit((values) => {
                    const history = this.props.history;
                    this.props.onLogin(values, history);
                  })}
                >
                  <Field
                    label="Username"
                    type="text"
                    name="username"
                    component={LoginField}
                  />
                  <Field
                    label="Password"
                    type="password"
                    name="password"
                    component={LoginField}
                  />
                  <button className="btn-flat teal white-text" type="submit">
                    Continue
                    <i className="material-icons right">done</i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Please provide a username.\n';
  }
  if (!values.password) {
    errors.password = 'Please provide a password.\n';
  }
  return errors;
}

Login = connect(null, { onLogin })(withRouter(Login));

//options object inside redux form helper
export default reduxForm({
  validate,
  form: 'loginForm',
})(Login);
