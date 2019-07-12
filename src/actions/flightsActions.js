import axios from 'axios'
import { GET_UPCOMING_FLIGHTS } from './types';

export const getUpcomingFlights = (type, token) => async dispatch => {

    const url = "https://dev-api.blue-style.cz/homework/v1/Definitions/getUpcomingFlights";
  
    const header = `${type} ${token}`;

    const res = await axios.get(url,{
        headers:{
            'Authorization': header
        }
      });
    
    dispatch({
        type: GET_UPCOMING_FLIGHTS,
        payload: res.data
    })
};