import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'

export default class SubmitButton extends Component{
  render(){
    return (
      <div>
      <button
      className ='submit-guess'
      disabled={this.props.buttonToggle}
      onClick={this.props.onButtonClick.bind(this)}>SUBMIT</button>
      </div>
    )
  }
}
