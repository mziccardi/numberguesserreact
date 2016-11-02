import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'

export default class UserRange extends Component{
  render(){
    return (
      <div>
        <input
          type ='number'
          placeholder='min'
          onChange={(e)=>this.props.changeMin(e)}
          />
        <input
          type ='number'
          placeholder='max'
          />
      </div>
    )
  }
}
