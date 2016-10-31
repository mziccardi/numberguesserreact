import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'
import UserGuess from './UserGuess.js'
import ClearButton from './clearbutton.js'
import ResetButton from './resetbutton.js'

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      guess: '',
      lastGuess: '',
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

  guessSubmit (e){
    e.preventDefault()
    let guess = e.target.value
    this.setState( { guess:guess, lastGuess:guess} )
  }

  inRange(){
    let userGuess = parseInt(this.state.guess);
    let min = this.state.min
    let max = this.state.max
    if(userGuess < min || userGuess > max){
this.setState({message:'Pick a number between 1 and 100 ya dingus.'})
  return false;
}else{
  return true;
}

  }

  checkNumber(){
    let userGuess = parseInt(this.state.guess);
    let compNum = this.state.randoNum;
    if (this.inRange()){
    if(userGuess < compNum){
      this.setState({message:'Too low! Guess again, ya dingus'})
    }else if(userGuess>compNum){
      this.setState({message:'Too high! Guess again, ya dingus'})
    }else{
      this.setState({message:"You're Right"})
    }
  }
  }

  clearInput(){
    this.setState({guess: '',lastGuess: ''})
  }

  resetGame(){
    this.setState({
      guess: '',
      lastGuess: '',
      showGuess:'',
      randoNum:'',
      message:'',
      min:1,
      max:100
    })
    this.makerandom()
  }

  render(){
    return (
      <section>
      <h1>Welcome to Number Guesser</h1>
      <UserGuess
      message={this.state.message}
      guess={this.state.guess}
      lastGuess={this.state.lastGuess}
      checkNumber={this.checkNumber.bind(this)}
      guessSubmit={this.guessSubmit.bind(this)}
      />
      <ClearButton
      clearInput={this.clearInput.bind(this)} />
      <ResetButton
      resetGame={this.resetGame.bind(this)} />
      </section>
    )
  }
}
