import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/authReducer';

export default function storeConfig() {
    return createStore(
        reducer,
        applyMiddleware(
            thunkMiddleware
        )
    );
}