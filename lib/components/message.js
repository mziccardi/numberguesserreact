import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Message extends Component{
  render(){
    return(
      <div>
      <h3> Your Last Guess Was... </h3>
      <h3>{this.props.lastGuess}</h3>
      <h2>{this.props.message}</h2>
      </div>
    )
  }
}
