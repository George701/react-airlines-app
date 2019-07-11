import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getAuthenticated } from '../../actions/dataActions';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Login extends Component {
    state = {
        user: "",
        password: "",
        loginFail: false,
        redirect: false
    }

    componentDidUpdate(){
        const { auth } = this.props;
        if(auth.Token !== "" && (auth.Token).length !== 0){
            this.setState({redirect: true});
        }
    }

    render() {
        const { redirect } = this.state;
        if(redirect !== true){
            return (
                <div>
                    Login
                    <input type="text" id="user" onChange={this.onChange} value={this.state.user}/>
                    <input type="text" id="password" onChange={this.onChange} value={this.state.password}/>
                    <button onClick={this.login}>Login</button>
                    {this.alertMessage()}
                </div>
            )
        }else{
            return <Redirect to="/test"/>
        }
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
        },1000)
    }
}



Login.propTypes = {
    getAuthenticated: PropTypes.func.isRequired,
}

export default connect((state) => {return {auth: state.auth}}, {getAuthenticated})(Login);
