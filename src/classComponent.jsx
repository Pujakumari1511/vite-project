import React, { Component } from 'react';

class Counter extends Component {
    // Initialize state as a class property

    state = {
        count: 0
    }

    render(){
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

export default Counter;