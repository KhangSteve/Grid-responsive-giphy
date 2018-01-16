/**
 * Created by Khang @Author on 15/01/18.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/login';
import './LoginForm.css';
import {fetchData} from '../../actions/giphy';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    let { email, password } = this.state;
    var isLoginPending = this.props.isLoginPending;
    var isLoginSuccess = this.props.isLoginSuccess;
    var loginError = (this.props.loginError != null) ? 'Invalid username password ' : '';

    return (
      <form name="loginForm" onSubmit={this.onSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({ email: e.target.value })} value={email} />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({ password: e.target.value })} value={password} />
          </div>
        </div>

        <input type="submit" value="Login" />

        <div className="message">
          {isLoginPending && <div>Please wait...</div>}
          {isLoginSuccess && <div>Success.</div>}
          {loginError && <div>{loginError.message}</div>}
        </div>
      </form>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.dispatch(login(email, password));
    this.setState({
      email: '',
      password: ''
    });
  }
}

LoginForm.PropTypes = {
  login: PropTypes.func.isRequired,
  isLoginPending: PropTypes.bool.isLoginPending,
  isLoginSuccess: PropTypes.bool.isLoginSuccess,
  loginError: PropTypes.object.loginError
}

export default connect()(LoginForm);