import axios from 'axios'
import { GET_AUTH, GET_CREDENTIALS } from './types';
import { computeSessionTime } from '../functions';

export const getAuthenticated = (user, pass) => async dispatch => {

    const url = "https://dev-api.blue-style.cz/account/v1/token";
    
    //     "User": "dev",
    //     "Password": "sf*&4okgrf&^regrfskl"
  

    const res = await axios.post(url,{
        "Code": "BRIGHT",
        "User": user,
        "Password": pass
      });

    (res.data).EndSession = computeSessionTime(res.data.ExpiresIn);
    
    dispatch({
        type: GET_AUTH,
        payload: res.data
    })
};

export const getCredentials = (user, password) => async dispatch => {

    const res = {
        user,
        password
    }

    dispatch({
        type: GET_CREDENTIALS,
        payload: res
    })
};