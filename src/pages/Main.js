import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUpcomingFlights } from '../actions/flightsActions';
import { convertDate } from '../functions';
import PropTypes from "prop-types";

import Rooming from '../components/ContentBlocks/Rooming'

class Main extends Component {
    state = {
        date: "",
        departureAirport: "",
        arrivingAirport: "",
        airplane: ""
    }

    componentWillMount(){
        this.props.getUpcomingFlights(this.props.auth.Type, this.props.auth.Token);
    }

    componentWillReceiveProps(props){
        const { upcomningFlights } = props;
        console.log(upcomningFlights);
        this.setState({
            date: upcomningFlights.date[0],
            departureAirport: upcomningFlights.dAir[0]["Code"],
            arrivingAirport: upcomningFlights.arAir[0]["Code"],
            airplane: upcomningFlights.pName[0]
        })
    }

    render() {
        const { upcomningFlights } = this.props;
        // console.log(this.state);
        if(Object.keys(upcomningFlights).length !== 0 && this.state.date !== 0){
            return(
                <div className="container pt-5">
                    {this.getControllers(upcomningFlights)}
                    {this.getBody()}
                </div>
            )
        }else{
            return <div>Loading</div>
        }        

    }

    getBody = () => {
        const { date, departureAirport, arrivingAirport, airplane} = this.state;
        // console.log(date, departureAirport, arrivingAirport, airplane);
        return (
            <div className="mt-5">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Rooming fromDate={date} departureAirport={departureAirport} arrivingAirport={arrivingAirport} pnlName={airplane}/>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        Hi
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        HElLo
                    </div>
                </div>
            </div>
        )
    }

    getControllers = (obj) => {
        const { date, departureAirport, arrivingAirport, airplane } = this.state;
        let t_key = 0, d_key = 0, a_key = 0, p_key = 0;
        return(
            <div className="row">
                <select className="form-control col mr-1" name="date" id="date" onChange={this.onChange} value={date}>
                    {(obj.date).map(unit => {
                        t_key++;
                        return <option key={t_key} value={unit}>{convertDate(unit)}</option>
                    })}
                </select>
                <select className="form-control col mr-1 ml-1" name="departureAirport" id="departureAirport" onChange={this.onChange} value={departureAirport.Code}>
                    {(obj.dAir).map(unit=>{
                        d_key++;
                        return <option key={d_key} value={unit.Code}>{unit.Name}</option>
                    })}
                </select>
                <i className="fas fa-arrow-right arrow-p"/>
                <select className="form-control col mr-1 ml-1" name="arravingAirport" id="arrivingAirport" onChange={this.onChange} value={arrivingAirport.Code}>
                    {(obj.arAir).map(unit=>{
                        a_key++;
                        return <option key={a_key} value={unit.Code}>{unit.Name}</option>
                    })}
                </select>
                <select className="form-control col ml-1" name="airplane" id="airplane" onChange={this.onChange} value={airplane}>
                    {(obj.pName).map(unit => {
                        p_key++;
                        return <option key={p_key} value={unit}>{unit}</option>
                    })}
                </select>
            </div>
        )
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }

}

Main.propTypes = {
    getUpcomingFlights: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    cred: state.cred,
    auth: state.auth,
    upcomningFlights: state.upcomningFlights
 });

export default connect(mapStateToProps, {getUpcomingFlights})(Main);
