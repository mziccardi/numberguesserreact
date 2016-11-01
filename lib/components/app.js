import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'
import UserGuess from './UserGuess'
import ClearButton from './clearbutton'
import ResetButton from './resetbutton'
import Message from './message'

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      showGuess:'',
      randoNum:'',
      message:'',
      min:1,
      max:100
    }
  }

  makerandom(){
    let randoNum = Math.floor((Math.random() * (this.state.max - this.state.min)) + this.state.min);
    this.setState( {randoNum:randoNum} )
  }

  componentWillMount (){
    this.makerandom();
  }



  inRange(guess){
    let min = this.state.min
    let max = this.state.max
    if(guess < min || guess > max){
      this.setState({message:'Pick a number between 1 and 100 ya dingus.'})
  return false;
}else{
  return true;
}

  }

  checkNumber(guess){
    let compNum = this.state.randoNum;
    if (this.inRange(guess)){
    if(guess < compNum){
      this.setState({message:'Too low! Guess again, ya dingus'})
    }else if(guess > compNum){
      this.setState({message:'Too high! Guess again, ya dingus'})
    }else{
      this.setState({message:"You're Right"})
      this.setState({min:this.state.min -11})
      this.setState({max:this.state.max +10})
    }
  }
  }

  clearInput(guess){

    this.setState({guess: '',lastGuess: ''})
  }


  resetGame(){
    this.setState({
      guess: '',
      lastGuess: '',
      showGuess:'',
      randoNum:'',
      message:'',
      min:this.state.min,
      max:this.state.max
    })
    this.makerandom()
  }

  render(){
    return (
      <section>
      <h1>Welcome to Number Guesser</h1>
      <Message
      message={this.state.message}/>
      <UserGuess
      clearInput={this.clearInput.bind(this)}
      guess={this.state.guess}
      checkNumber={this.checkNumber.bind(this)}
      />
      <ClearButton
      clearInput={this.clearInput.bind(this)} />
      <ResetButton
      resetGame={this.resetGame.bind(this)} />
      </section>
    )
  }
}
