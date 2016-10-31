import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'

//add user input field
//add submit button
//set the state of user guess and show what the last guess was in a div
//this.state.userguess

export default class UserGuess extends Component{
  render(){
    return(
      <div>
      <h3> Your Last Guess Was... </h3>
      <h3>{this.props.lastGuess}</h3>
      <h2>{this.props.message}</h2>
      <div>
      <input
          className="user-input"
          type='number'
          placeholder="Guess!"
          onChange={this.props.guessSubmit}
      />
      <button
      className ='submit-guess'
      onClick={this.props.checkNumber}>SUBMIT</button>
      </div>
      </div>
    )
  }
}
