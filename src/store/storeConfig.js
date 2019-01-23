import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth.reducer';
import common from './reducers/common.reducer';

export default function storeConfig() {
    return createStore(
        combineReducers({auth,common}),
        applyMiddleware(thunk)

    );
}