import axios from 'axios'
import { GET_AUTH } from './type';

export const getAuthenticated = (user, pass) => async dispatch => {

    const url = "https://dev-api.blue-style.cz/account/v1/token";
    
    //     "User": "dev",
    //     "Password": "sf*&4okgrf&^regrfskl"
  

    const res = await axios.post(url,{
        "Code": "BRIGHT",
        "User": user,
        "Password": pass
      });

    dispatch({
        type: GET_AUTH,
        payload: res.data
    })
};