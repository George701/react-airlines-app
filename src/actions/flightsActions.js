import axios from 'axios'
import { GET_UPCOMING_FLIGHTS } from './types';
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