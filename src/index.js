import React from 'react';
import {render} from 'react-dom';
import Counter from './Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from "./reducer";

export const store = createStore(reducer);
console.log('store', store);

const App = () => (
    <Provider store={store}>
        <Counter/>
    </Provider>
);

render(<App/>, document.getElementById('root'));
