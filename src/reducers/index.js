import { combineReducers } from 'redux';
import authReducer from './authReducer';
import credentialsReducer from './credentialsReducer';
import upcomningFlightsReducer from './upcomningFlightsReducer';
import roomingReducer from './roomingReducer';
import transferReducer from './transferReducer';
import passengersReducer from './passengersReducer';

export default combineReducers({
    auth:  authReducer,
    cred: credentialsReducer,
    upcomningFlights: upcomningFlightsReducer,
    rooming: roomingReducer,
    transfer: transferReducer,
    passengers: passengersReducer,
});