import { combineReducers } from 'redux';
import authReducer from './authReducer';
import credentialsReducer from './credentialsReducer';
import upcomningFlightsReducer from './upcomningFlightsReducer';

export default combineReducers({
    auth:  authReducer,
    cred: credentialsReducer,
    upcomningFlights: upcomningFlightsReducer
});