import React, { Component } from 'react';
import { getAuthenticated, getCredentials } from '../actions/authActions';
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Login extends Component {
    state = {
        user: "",
        password: "",
        loginFail: false,
    }

    render() {
        return (
            <div className="container pt-5">
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="user">
                        <i className="fas fa-user"/>
                        <span> User type</span>
                    </label>
                    <input type="text" className="form-control" id="user" onChange={this.onChange} value={this.state.user} placeholder="Enter type of user"/>
                    <small id="emailHelp" className="form-text text-muted">There is two types of user: dev and test</small>
                    <label htmlFor="password">
                        <i className="fas fa-key"/>
                        <span> Password</span>
                    </label>
                    <input type="password" className="form-control" id="password" onChange={this.onChange} value={this.state.password}/>
                    <br/>
                    <button className="btn btn-primary" onClick={this.login}>
                        <i className="fas fa-lock-open"/>{" "}
                        <span>Login</span>
                    </button>
                    <hr/>
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
                <div className="alert alert-danger" role="alert">
                    Failed to login
                </div>
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

const mapStateToProps = (state) => ({
    auth: state.auth
 });

export default connect(mapStateToProps, {getAuthenticated, getCredentials})(Login);
