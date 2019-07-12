import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAuthenticated } from '../../actions/authActions';

import Login from '../../pages/Login';
import Main from '../../pages/Main';

class MyRouter extends Component {

    render() {
        return (
            <Router>
                <Redirect to="/login"/>

                <Route exact path="/login" component={Login}/>

                <Route exact path="/main" render={() => this.isAccessAllowed(Main)}/>
            </Router>
        )
    }

    isAccessAllowed = Component => {
        // console.log(this.props)
        if(this.props.cred.user !== ""){
            // console.log("Now is" + new Date);
            // console.log("End session at " + new Date(this.props.auth.EndSession));
            // console.log(Date.now() > this.props.auth.EndSession);
            if(Date.now() > this.props.auth.EndSession){
                this.props.getAuthenticated(this.props.cred.user, this.props.cred.password);
            }
            return <Component/>;
        }else{
            return <Redirect to="/login"/>
        }
    }
}

MyRouter.propTypes = {
    getAuthenticated: PropTypes.func.isRequired
}

export default connect((state) => {return {cred: state.cred, auth: state.auth}}, {getAuthenticated})(MyRouter);
// export default connect((state) => {return {auth: state.auth}}, {getAuthenticated, getCredentials})(Login);
