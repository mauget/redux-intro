import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from "./reducer";
import './app.css';

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Main = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

render(<Main/>, document.getElementById('root'));
