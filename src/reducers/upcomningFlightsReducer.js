import { GET_UPCOMING_FLIGHTS } from '../actions/types';

const initialState = {
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_UPCOMING_FLIGHTS:

            const result = action.payload;
            
            return {
                ...state,
                ...result
            };
        default:
            return state;
    }
}