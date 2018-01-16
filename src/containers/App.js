/**
 * Created by Khang @Author on 15/01/18.
 */
import React, { Component } from 'react';
//import LoginForm from '../components/LoginForm/LoginForm';
import ResponsiveForm from '../components/LoginFormResponsive/ResponsiveForm';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import {fetchData} from '../actions/giphy';
import MainSection from '../components/MainSection'
import Header from '../components/Header/Header'
import '../styles/App.css';

class App extends Component {
    render() {
        if (!this.props.isLoginSuccess) {
            return (
                <div className="App">
                    <Header/>
                    <ResponsiveForm isLoginPending={this.props.isLoginPending} isLoginSuccess={this.props.isLoginSuccess}
                        loginError={this.props.loginError} />
                </div>
            );
        } else {
            return (
                <div className="background">
                    <MainSection data={this.props.data}/>
                </div>
            );
        }

    }
}

App.propTypes = {
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError,
        data : state.data,
        isLoading : state.isLoading,
        error : state.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        fetchData: () => dispatch(fetchData())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App)


