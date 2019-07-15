import axios from 'axios'
import { GET_UPCOMING_FLIGHTS, GET_ROOMING, GET_TRANSFER, GET_PASSENGERS } from './types';
import { generateControllerOptions } from '../functions';

export const getUpcomingFlights = (type, token) => async dispatch => {

    const url = "https://dev-api.blue-style.cz/homework/v1/Definitions/getUpcomingFlights";
  
    const header = `${type} ${token}`;

    const res = await axios.get(url,{
        headers:{
            'Authorization': header
        }
      });

    const result = generateControllerOptions(res.data);
    
    dispatch({
        type: GET_UPCOMING_FLIGHTS,
        payload: result
    })
};

export const getRoomingList = (type, token, date, departureAirport, arrivalAirport, pnlName) => async dispatch => {

    const url = "https://dev-api.blue-style.cz/homework/v1/Reports/roomingList";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${type} ${token}`
    };

    const body = {
        "FromDate": date,
        "DepartureAirport": departureAirport,
        "ArrivalAirport": arrivalAirport,
        "PnlName": pnlName
      };

      const res = await axios.post(url, body, {headers: headers});
        
       dispatch({
        type: GET_ROOMING,
        payload: res.data
    })

};

export const getTransferList = (type, token, date, departureAirport, arrivalAirport, pnlName) => async dispatch => {

    const url = "https://dev-api.blue-style.cz/homework/v1/Reports/transferList";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${type} ${token}`
    };

    const body = {
        "FromDate": date,
        "DepartureAirport": departureAirport,
        "ArrivalAirport": arrivalAirport,
        "PnlName": pnlName
      };
      const res = await axios.post(url, body, {headers: headers});
        
       dispatch({
        type: GET_TRANSFER,
        payload: res.data
    })

};

export const getPassengersList = (type, token, date, departureAirport, arrivalAirport, pnlName) => async dispatch => {

    const url = "https://dev-api.blue-style.cz/homework/v1/Reports/flightPassengerList";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${type} ${token}`
    };

    const body = {
        "FromDate": date,
        "DepartureAirport": departureAirport,
        "ArrivalAirport": arrivalAirport,
        "PnlName": pnlName
      };
      const res = await axios.post(url, body, {headers: headers});
        
       dispatch({
        type: GET_PASSENGERS,
        payload: res.data
    })

};