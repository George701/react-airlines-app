import React, { Component } from 'react';
import { connect } from "react-redux";
import { getPassengersList } from '../../actions/flightsActions';
import PropTypes from 'prop-types';

class Passengers extends Component {

    componentWillMount(){
        const { auth, fromDate, departureAirport, arrivingAirport, pnlName } = this.props;
        this.props.getPassengersList(auth.Type, auth.Token, fromDate, departureAirport, arrivingAirport, pnlName);
    }

    componentDidUpdate(prevProps){
        if(prevProps.fromDate !== this.props.fromDate || prevProps.departureAirport !== this.props.departureAirport || prevProps.arrivingAirport !== this.props.arrivingAirport || prevProps.pnlName !== this.props.pnlName){
            this.props.getPassengersList(this.props.auth.Type, this.props.auth.Token, this.props.fromDate, this.props.departureAirport, this.props.arrivingAirport, this.props.pnlName);
        }
    }

    render() {
        const { passengers } = this.props;
        if(passengers !== undefined || Object.values(passengers) !== 0){
            if(passengers.Result !== undefined){
                if((passengers.Result).length !== 0){
                    let key = 0;
                    return (
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Nationality</th>
                                    <th scope="col">Flight Number</th>
                                    <th scope="col">Return Flight Number</th>
                                </tr>
                            </thead>
                            <tbody className="info-block-overflow">
                                {(passengers.Result).map(unit => {
                                    console.log(unit)
                                    key++;
                                    return (
                                        <tr key={key}>
                                            <td>{unit.TravellerInfo.Name} {unit.TravellerInfo.Surname}</td>
                                            <td>{unit.Nation}</td>
                                            <td>{unit.FlightNo}</td>
                                            <td>{unit.ReturnFlightNo}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    )
                }else{
                    return <div>There is no results</div>
                }
            }else{
                return <div>Loading</div>
            }
        }else{
            return <div>Loading</div>
        }
    }
}

Passengers.propTypes = {
    getPassengersList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    passengers: state.passengers
 });


export default connect(mapStateToProps, { getPassengersList })(Passengers);