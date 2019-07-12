import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUpcomingFlights } from '../actions/flightsActions';
import PropTypes from "prop-types";

class Main extends Component {

    componentDidMount(){
        console.log(this.props);
        this.props.getUpcomingFlights(this.props.auth.Type, this.props.auth.Token);
    }

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps)
    //     console.log("Hello")
    // }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Main</h1>
            </div>
        )
    }
}

Main.propTypes = {
    getUpcomingFlights: PropTypes.func.isRequired
}

export default connect((state) => {return {cred: state.cred, auth: state.auth, upcomningFlights: state.upcomningFlights}}, {getUpcomingFlights})(Main);
// export default connect((state) => {return {auth: state.auth}}, {getAuthenticated, getCredentials})(Login);
