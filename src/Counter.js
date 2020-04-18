import React from 'react';
import {connect} from 'react-redux';

// class Counter extends React.Component {
//   increment = () => {
//     this.props.dispatch({ type: 'INCREMENT' });
//   }
//
//   decrement = () => {
//     this.props.dispatch({ type: 'DECREMENT' });
//   }
//
//   render() {
//     return (
//       <div>
//         <h2>Counter</h2>
//         <div>
//           <button onClick={this.decrement}>-</button>
//           <span>{this.props.count}</span>
//           <button onClick={this.increment}>+</button>
//         </div>
//       </div>
//     )
//   }
// }

function Counter(props) {
    const {dispatch, count} = {...props};

    const increment = () => {
        dispatch({type: 'INCREMENT'});
    }

    const decrement = () => {
        dispatch({type: 'DECREMENT'});
    }

    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);
