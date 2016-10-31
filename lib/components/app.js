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

  render(){
    return (
      <section>
      <h1>Welcome to Number Guesser</h1>
      <UserGuess
      guess={this.state.guess}
      lastGuess={this.state.lastGuess}
      guessSubmit={this.guessSubmit.bind(this)}
      />
      </section>
    )
  }
}
