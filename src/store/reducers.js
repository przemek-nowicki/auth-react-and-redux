import * as actionTypes from './actionTypes';

const initialState = {loading: false};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START:
            return { loading: true };
        default:
            return state;
    }
};

export default reducer;