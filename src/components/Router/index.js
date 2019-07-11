import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from '../../pages/Login';
import Main from '../../pages/Main';

class MyRouter extends Component {
    state = {
        test: false
    }

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
        if(this.state.test){
            return <Component/>;
        }else{
            return <Redirect to="/login"/>
        }
    }
}

export default MyRouter;