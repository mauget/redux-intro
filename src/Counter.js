import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {ACTION_DECREMENT, ACTION_INCREMENT} from "./actions";
import {store} from "./index";
import {initialState} from "./reducer";

// Monitor to learn about changed Redux state
let oldValue = initialState;
const monitorStore = () => store.subscribe(() => {
    const value = store.getState();
    if (value !== oldValue) {
        console.log('store', store.getState());
        oldValue = value;
    }
});

function Counter(props) {
    const {dispatch, count} = {...props};
    console.log('props', props);

    monitorStore();

    const increment = () => dispatch(ACTION_INCREMENT);

    const decrement = () => dispatch(ACTION_DECREMENT);

    // Dispatch an unknown-to-reducer action
    // It will not cause a state update  nor will be log a rendrer count increase
    const badAction = () => dispatch({type: 'ACTION_WITH_NO_REDUCER'});

    const renderCount = useRef(0);
    renderCount.current = renderCount.current + 1;
    console.log(`render count ${renderCount.current}`);

    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
                <br/>
                <button onClick={badAction}>Unknown Actiopn</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({count: state.count});

export default connect(mapStateToProps)(Counter);
