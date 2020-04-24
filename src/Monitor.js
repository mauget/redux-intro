import React from 'react';
import {connect} from 'react-redux';

function Monitor(props) {
    const {count} = {...props};

    return (
        <div className={"flex-container"}>
            <h3>Monitor</h3>
            <div>
                <label>Value {count}</label>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({count: state.count});

export default connect(mapStateToProps)(Monitor);
