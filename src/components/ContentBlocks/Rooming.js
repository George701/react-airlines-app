import React, { Component } from 'react';
import { connect } from "react-redux";
import { getRoomingList } from '../../actions/flightsActions';
import PropTypes from 'prop-types';

class Rooming extends Component {

    componentWillMount(){
        const { auth, fromDate, departureAirport, arrivingAirport, pnlName } = this.props;
        this.props.getRoomingList(auth.Type, auth.Token, fromDate, departureAirport, arrivingAirport, pnlName);
    }

    componentDidUpdate(prevProps){
        if(prevProps.fromDate !== this.props.fromDate || prevProps.departureAirport !== this.props.departureAirport || prevProps.arrivingAirport !== this.props.arrivingAirport || prevProps.pnlName !== this.props.pnlName){
            this.props.getRoomingList(this.props.auth.Type, this.props.auth.Token, this.props.fromDate, this.props.departureAirport, this.props.arrivingAirport, this.props.pnlName);
        }
    }

    render() {
        const { rooming } = this.props;
        if(rooming !== undefined || Object.values(rooming) !== 0){
            if(rooming.Result !== undefined){
                if((rooming.Result).length !== 0){
                    let key = 0;
                    return (
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Hotel</th>
                                    <th scope="col">Reservation Number</th>
                                    <th scope="col">Check In</th>
                                    <th scope="col">Name</th>
                                </tr>
                            </thead>
                            <tbody className="info-block-overflow">
                                {(rooming.Result).map(unit => {
                                    key++;
                                    return (
                                        <tr key={key}>
                                            <td>{unit.Hotel.Name}</td>
                                            <td>{unit.ReservationNumber}</td>
                                            <td>{unit.CheckIn}</td>
                                            <td>{unit.TravellerInfo.Name} {unit.TravellerInfo.Surname}</td>
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

Rooming.propTypes = {
    getRoomingList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    rooming: state.rooming
 });


export default connect(mapStateToProps, { getRoomingList })(Rooming);