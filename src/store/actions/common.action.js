import * as actionTypes from '../../constants/actionTypes';

export const asyncStart = (action) => {
    return {
        type: actionTypes.ASYNC_START,
        action: action
    };
};

export const asyncEnd = () => {
    return {
        type: actionTypes.ASYNC_END
    };
};