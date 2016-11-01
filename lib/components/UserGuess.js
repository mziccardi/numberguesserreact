import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'
import SubmitButton from './submitbutton'
import Message from './message'
import ClearButton from './clearbutton'
//add user input field
//add submit button
//set the state of user guess and show what the last guess was in a div
//this.state.userguess

export default class UserGuess extends Component{
 constructor(){
   super();
   this.state = {
     guess:'',
     lastGuess:'',
     message:''
   }
 }
 inRange(guess){
   let { min, max } = this.props
   if(guess < min || guess > max){
     this.setState({message:'Pick a number between 1 and 100 ya dingus.'})
 return false;
}else{
 return true;
}

 }
   checkNumber(guess){
     let compNum = this.props.randoNum;
     if (this.inRange(guess)){
     if(guess < compNum){
       this.setState({message:'Too low! Guess again, ya dingus'})
     }else if(guess > compNum){
       this.setState({message:'Too high! Guess again, ya dingus'})
     }else{
       this.setState({message:"You're Right"})
       this.setState({min:this.props.min -11})
       this.setState({max:this.props.max +10})
     }
   }
   }
  guessSubmit (e){

    let guess = e.target.value
    this.setState( { guess:guess, lastGuess:guess} )
  }

  onButtonClick(){
    const guess = parseInt(this.state.guess);
    this.checkNumber(guess);
    this.props.clearInput(guess);

  }
  clearInput(guess){

    this.setState({guess: '',lastGuess: ''})
  }


  render(){
    let buttonToggle = false
  if (!this.state.guess){
    buttonToggle = true
  }
    return(
        <div>
        <Message
        lastGuess ={this.state.lastGuess}
        message={this.state.message}/>
          <input
              className="user-input"
              type='number'
              placeholder="Guess!"
              value ={this.state.guess}
              onChange={this.guessSubmit.bind(this)}
          />
          <SubmitButton
          buttonToggle={buttonToggle}
          onButtonClick={this.onButtonClick.bind(this)} />
          <ClearButton
          clearInput ={this.clearInput.bind(this)}/>
        </div>
    )
  }
}
