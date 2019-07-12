import { combineReducers } from 'redux';
import authReducer from './authReducer';
import credentialsReducer from './credentialsReducer';

export default combineReducers({
    auth:  authReducer,
    cred: credentialsReducer
});