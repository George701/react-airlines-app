import { GET_PASSENGERS } from '../actions/types';

const initialState = {
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_PASSENGERS:

            const result = action.payload;
            
            return {
                ...state,
                ...result
            };
        default:
            return state;
    }
}