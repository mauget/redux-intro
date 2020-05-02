import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import * as action from "./actions";
import Monitor from "./Monitor";

export function App(props) {
    const {dispatch, count} = {...props};
    console.log('props', props);

    const increment = () => dispatch(action.ACTION_INCREMENT);
    const decrement = () => dispatch(action.ACTION_DECREMENT);

    // Dispatch an unknown-to-reducer action
    // It will not cause a state update  nor will be log a rendrer count increase
    const badAction = () => dispatch({type: 'ACTION_WITH_NO_REDUCER'});

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
