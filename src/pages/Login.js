import React, { Component } from 'react';
import { getAuthenticated, getCredentials } from '../actions/authActions';
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Login extends Component {
    state = {
        user: "",
        password: "",
        loginFail: false,
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                    <input type="text" id="user" onChange={this.onChange} value={this.state.user}/>
                    <input type="text" id="password" onChange={this.onChange} value={this.state.password}/>
                    <button onClick={this.login}>Login</button>
                    {this.alertMessage()}
                </div>
            </div>
        )
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    alertMessage = () => {
        if(this.state.loginFail === true){
            return (
                <div>Faild to log in</div>
            )
        }else{
            return null
        }
    }

    login = () => {
        this.props.getAuthenticated(this.state.user, this.state.password);
        setTimeout(()=>{
            if(this.props.auth.Token === "") this.setState({loginFail: true})
            else this.props.getCredentials(this.state.user, this.state.password);
        },1000)
    }
}

Login.propTypes = {
    getAuthenticated: PropTypes.func.isRequired,
    getCredentials: PropTypes.func.isRequired,
}

export default connect((state) => {return {auth: state.auth}}, {getAuthenticated, getCredentials})(Login);
