import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAuthenticated } from '../../actions/authActions';

import Login from '../../pages/Login';
import Main from '../../pages/Main';
import Test from '../../pages/Test';

class MyRouter extends Component {

    render() {
        return (
            <Router>
                <Redirect to="/login"/>

                <Route exact path="/test" component={Test}/>
                <Route exact path="/login" render={() => this.isUserVerified()}/>

                <Route exact path="/main" render={() => this.isAccessAllowed(Main)}/>
            </Router>
        )
    }

    isUserVerified = () => {
        if(this.props.cred.user !== ""){
            return <Redirect to="/main"/>
        }else{
            return <Login/>
        }
    }

    isAccessAllowed = Component => {
        if(this.props.cred.user !== ""){
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

const mapStateToProps = (state) => ({
    cred: state.cred,
    auth: state.auth
 });

export default connect(mapStateToProps, {getAuthenticated})(MyRouter);
