import React, {Fragment, useRef} from 'react';
import {connect} from 'react-redux';
import * as action from "./actions";
import {store} from "./index";
import {initialState} from "./reducer";
import Monitor from "./Monitor";

// Monitor to learn about changed Redux state
let oldValue = initialState;
const monitorStore = () => store.subscribe(() => {
    const value = store.getState();
    if (value !== oldValue) {
        console.log('store', store.getState());
        oldValue = value;
    }
});

function App(props) {
    const {dispatch, count} = {...props};
    console.log('props', props);

    monitorStore();

    const increment = () => dispatch(action.ACTION_INCREMENT);

    const decrement = () => dispatch(action.ACTION_DECREMENT);

    // Dispatch an unknown-to-reducer action
    // It will not cause a state update  nor will be log a rendrer count increase
    const badAction = () => dispatch({type: 'ACTION_WITH_NO_REDUCER'});

    const renderCount = useRef(0);
    renderCount.current = renderCount.current + 1;
    console.log(`render count ${renderCount.current}`);

    return (
        <Fragment>
            <div className={"flex-container"}>
                <h3>Action</h3>
                <div>
                    <button onClick={decrement}>-</button>
                    <label>{count}</label>
                    <button onClick={increment}>+</button>
                    <button onClick={badAction}>Unknown Action</button>
                </div>
            </div>
            <br/>
            <Monitor/>
            <br/>
            <Monitor/>
            <br/>
            <Monitor/>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({count: state.count});

export default connect(mapStateToProps)(App);
