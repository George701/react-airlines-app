import { GET_AUTH } from '../actions/type';

const initialState = {
    Type: "",
    Token: "",
    ExpiresIn: null
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