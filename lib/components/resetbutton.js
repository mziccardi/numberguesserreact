import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'

export default class ResetButton extends Component{
  render(){
    return (
      <div>
        <button className='clear'
        onClick={this.props.resetGame}>Reset Game</button>
      </div>
    )
  }
}
