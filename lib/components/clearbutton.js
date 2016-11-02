import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'

export default class ClearButton extends Component{
  render(){
    return (
      <div>
        <button className='clear'
        disabled={this.props.buttonToggle}
        onClick={this.props.clearInput}>Clear</button>
      </div>
    )
  }
}
