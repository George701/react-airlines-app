import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUpcomingFlights } from '../actions/flightsActions';
import { convertDate } from '../functions';
import PropTypes from "prop-types";

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
        console.log(this.state);
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
        return (
            <div className="mt-5">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        Yaw
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        Hi
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        Hello
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

export default connect((state) => {return {cred: state.cred, auth: state.auth, upcomningFlights: state.upcomningFlights}}, {getUpcomingFlights})(Main);
