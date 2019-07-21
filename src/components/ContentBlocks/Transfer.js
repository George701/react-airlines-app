import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTransferList } from '../../actions/flightsActions';
import PropTypes from 'prop-types';

class Transfer extends Component {

    componentWillMount(){
        const { auth, fromDate, departureAirport, arrivingAirport, pnlName } = this.props;
        this.props.getTransferList(auth.Type, auth.Token, fromDate, departureAirport, arrivingAirport, pnlName);
    }

    componentDidUpdate(prevProps){
        if(prevProps.fromDate !== this.props.fromDate || prevProps.departureAirport !== this.props.departureAirport || prevProps.arrivingAirport !== this.props.arrivingAirport || prevProps.pnlName !== this.props.pnlName){
            this.props.getTransferList(this.props.auth.Type, this.props.auth.Token, this.props.fromDate, this.props.departureAirport, this.props.arrivingAirport, this.props.pnlName);
        }
    }

    render() {
        const { transfer } = this.props;
        if(transfer !== undefined || Object.values(transfer) !== 0){
            if(transfer.Result !== undefined){
                if((transfer.Result).length !== 0){
                    let key = 0;
                    return (
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Service</th>
                                    <th scope="col">Return Flight ID</th>
                                    <th scope="col">Return Flight Date</th>
                                    <th scope="col">Name</th>
                                </tr>
                            </thead>
                            <tbody className="info-block-overflow">
                                {(transfer.Result).map(unit => {
                                    key++;
                                    return (
                                        <tr key={key}>
                                            <td>{unit.Service.Name}</td>
                                            <td>{unit.ReturnFlight}</td>
                                            <td>{unit.ReturnFlightDateTime}</td>
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

Transfer.propTypes = {
    getTransferList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    transfer: state.transfer
 });


export default connect(mapStateToProps, { getTransferList })(Transfer);