import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
      }

      increment = () => {
        this.setState({count: this.state.count +1})
      } 

      decrement = () => {
        if (this.state.count > 0) {
        this.setState({count: this.state.count -1})
    }
    else {
        alert ("The counter cannot go below zero.")
    }
      }
      

  render() {
    return (
      <div style={{display:'flex', justifyContent:'center', gap:'3rem', margin:'7% 52%'}}>
        <button onClick={() => this.increment()}> + </button>
        <h3> {this.state.count} </h3>
        <button onClick={() =>  this.decrement()}> - </button> 
      </div>
    );
  }
}

