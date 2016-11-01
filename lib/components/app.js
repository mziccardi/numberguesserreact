import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'
import UserGuess from './UserGuess'
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

      <UserGuess
      min={this.state.min}
      max={this.state.max}
      randoNum={this.state.randoNum}

      guess={this.state.guess}
      />
      
      <ResetButton
      resetGame={this.resetGame.bind(this)} />
      </section>
    )
  }
}
