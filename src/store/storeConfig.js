import { createStore } from 'redux';
import reducer from '../store/reducers';

export default function storeConfig() {
    return createStore(
        reducer
    );
}