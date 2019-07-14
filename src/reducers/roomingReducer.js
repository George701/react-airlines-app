import { GET_ROOMING } from '../actions/types';

const initialState = {
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_ROOMING:

            const result = action.payload;
            
            return {
                ...state,
                ...result
            };
        default:
            return state;
    }
}