import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'

//add user input field
//add submit button
//set the state of user guess and show what the last guess was in a div
//this.state.userguess

export default class UserGuess extends Component{
 constructor(){
   super();
   this.state = {
     guess:'',
     lastGuess:''
   }
 }
  guessSubmit (e){

    let guess = e.target.value
    this.setState( { guess:guess, lastGuess:guess} )
  }

  onButtonClick(){
    const guess = parseInt(this.state.guess);
    this.props.checkNumber(guess);
    this.props.clearInput(guess);

  }

  render(){
    return(
        <div>
          <input
              className="user-input"
              type='number'
              placeholder="Guess!"
              value ={this.state.guess}
              onChange={this.guessSubmit.bind(this)}
          />
          <button
          className ='submit-guess'
          onClick={this.onButtonClick.bind(this)}>SUBMIT</button>
        </div>
    )
  }
}
