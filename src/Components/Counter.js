import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
      }

      

  render() {
    return (
      <div>
        <button> + </button>
        <button> - </button>
        
      </div>
    );
  }
}
