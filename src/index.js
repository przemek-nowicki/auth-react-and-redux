import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from './helpers/history';

import './index.css';
import App from './App';
import storeConfig from './store/storeConfig';
import * as serviceWorker from './serviceWorker';
import { Router, withRouter } from 'react-router-dom'

const store = storeConfig();
const AppWithRouter = withRouter(props => <App {...props}/>);

ReactDOM.render(<Router history={history}>
                    <Provider store={ store }>
                        <AppWithRouter/>
                    </Provider>
                </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
