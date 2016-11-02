import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'
import SubmitButton from './submitbutton'
import Message from './message'
import ClearButton from './clearbutton'


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
       this.props.makerandom()
       this.props.winning()
     }
   }
   }
  guessSubmit (e){

    let guess = e.target.value
    this.setState( { guess:guess } )
  }

  onButtonClick(){
    const guess = parseInt(this.state.guess);
    this.setState({lastGuess:guess, guess:''})
    this.checkNumber(guess);


  }
  clearInput(guess){

    this.setState({guess: '', lastGuess:'', message:''})
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
          buttonToggle={buttonToggle}
          clearInput ={this.clearInput.bind(this)}/>
        </div>
    )
  }
}
