import { GET_CREDENTIALS } from '../actions/types';

const initialState = {
    user: "",
    password: "",
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_CREDENTIALS:

            const result = action.payload;
            
            return {
                ...state,
                ...result
            };
        default:
            return state;
    }
}