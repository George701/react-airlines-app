import { GET_TRANSFER } from '../actions/types';

const initialState = {
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_TRANSFER:

            const result = action.payload;
            
            return {
                ...state,
                ...result
            };
        default:
            return state;
    }
}