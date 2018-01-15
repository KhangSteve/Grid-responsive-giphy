/**
 * Created by Khang @Author on 15/01/17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './css-styles/main.css';
import { login } from '../../actions/login';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/giphy';
class ResponsiveForm extends Component {

    static propTypes = {
        login: PropTypes.func.isRequired,
        isLoginPending: PropTypes.bool,
        isLoginSuccess: PropTypes.bool,
        loginError: PropTypes.object

    }

    constructor(props) {
        super(props)

        this._onSubmit = this._onSubmit.bind(this)
        this._changeUsername = this._changeUsername.bind(this)
        this._changePassword = this._changePassword.bind(this)

        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }


    componentDidMount() {
        this.props.dispatch(fetchData());
        this.setState({
            username: '',
            password: ''
        });
    }

    renderForm() {
        var loginError = this.props.loginError;


        return (
            <form className='form' onSubmit={this._onSubmit}>

                <div className='form__field-wrapper'>
                    <input
                        className='form__field-input'
                        type='text'
                        id='Username'
                        value={this.state.username}
                        placeholder='username'
                        onChange={this._changeUsername}
                        autoCorrect='off'
                        autoCapitalize='off'
                        spellCheck='false' />
                    <label className='form__field-label' htmlFor='username'>
                        Username
          </label>
                </div>
                <div className='form__field-wrapper'>
                    <input
                        className='form__field-input'
                        id='password'
                        type='password'
                        value={this.state.password}
                        placeholder='Password'
                        onChange={this._changePassword} />
                    <label className='form__field-label' htmlFor='password'>
                        Password
          </label>
                </div>
                <div>
                    <label>{loginError}</label>
                </div>
                <div className='form__submit-btn-wrapper'>
                    <button className='form__submit-btn' type='submit'>
                        LOGIN
                    </button>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div>
                <h1>Simple Webpage GIPHY</h1>
                <div className='form-page__wrapper'>
                    <div className='form-page__form-wrapper'>
                        <div className='form-page__form-header'>
                            <h2 className='form-page__form-heading'>Login</h2>
                        </div>
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        );
    }

    _changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    _changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    _emitChange(newFormState) {
    }

    _onSubmit(event) {
        event.preventDefault()
        this.props.dispatch(login(this.state.username, this.state.password));
        this.setState({
            username: '',
            password: ''
        });
    }
}
export default connect()(ResponsiveForm);



