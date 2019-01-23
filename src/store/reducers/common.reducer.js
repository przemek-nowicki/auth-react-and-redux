import * as actionTypes from '../../constants/action.constant';

const initialState = { loading: false, action: '' };

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ASYNC_START:
            return { ...state, loading: true, request: action.request };
        case actionTypes.ASYNC_END:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default reducer;