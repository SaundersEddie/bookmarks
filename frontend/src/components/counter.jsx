import React, { Component } from 'react';

 class Counter  extends React.Component {
     state = { 
         count: 3,

     };

    render() { 
        return <React.Fragment>
                    <span className="badge badge-primary m-2">{this.formatCount()}</span>
                    <button>Increment</button>
                </React.Fragment>;
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? ' ' : count;
    }
}
 
export default Counter ;