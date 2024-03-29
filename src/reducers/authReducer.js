import { GET_AUTH } from '../actions/types';

const initialState = {
    Type: "",
    Token: "",
    ExpiresIn: null,
    EndSession: null
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_AUTH:

            const result = action.payload;
            
            return {
                ...state,
                ...result
            };
        default:
            return state;
    }
}