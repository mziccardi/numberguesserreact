import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'

import UserGuess from './UserGuess.js'


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

  checkNumber(){
    console.log(this.state.randoNum);
    let userGuess = parseInt(this.state.guess);
    let compNum = this.state.randoNum;
    if(userGuess === compNum){
      console.log("it hits the if statement");
      this.setState({message:'You guessed right!'})
    }
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
      </section>
    )
  }
}
