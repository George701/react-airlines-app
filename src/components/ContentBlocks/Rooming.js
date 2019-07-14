import React, { Component } from 'react';
import { connect } from "react-redux";
import { getRoomingList } from '../../actions/flightsActions';
import PropTypes from 'prop-types'

class Rooming extends Component {
    state = {
    
    }

    componentWillMount(){
        console.log("Component will mount");
        const { auth, fromDate, departureAirport, arrivingAirport, pnlName } = this.props;
        console.log(auth, fromDate, departureAirport, arrivingAirport, pnlName);
        this.props.getRoomingList(auth.Type, auth.Token, fromDate, departureAirport, arrivingAirport, pnlName);
    }

    componentDidUpdate(prevProps){
        console.log("component did update");
        if(prevProps.fromDate !== this.props.fromDate || prevProps.departureAirport !== this.props.departureAirport || prevProps.arrivingAirport !== this.props.arrivingAirport || prevProps.pnlName !== this.props.pnlName){
            this.props.getRoomingList(this.props.auth.Type, this.props.auth.Token, this.props.fromDate, this.props.departureAirport, this.props.arrivingAirport, this.props.pnlName);
            console.log("I am called");
        }
    }

    

    render() {
        // console.log(this.props);
        return (
            <div className="container">
                Hello from rooming
            </div>
        )
    }
}

Rooming.propTypes = {
    getRoomingList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    rooming: state.rooming
 });


export default connect(mapStateToProps, { getRoomingList })(Rooming);