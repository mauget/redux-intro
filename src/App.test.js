import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import App from "./App";

configure({adapter: new Adapter()});

const middleware = [];
const mockStore = configureStore(middleware);

describe('App', () => {
    test('enzyme working', () => {
        const Foo = (<div/>);
        const wrapper = shallow(Foo);
        expect(wrapper).toMatchSnapshot();
    });

    it('shallow-renders', () => {
        const initialState = {count: 42};
        const store = mockStore(initialState);

        const wrapper = shallow(
            <Provider store={store}>
                <App/>
            </Provider>);
        expect(wrapper).toMatchSnapshot();
    });
});
