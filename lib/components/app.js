import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom';


export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      guess: '',
      lastGuess: '',
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

  render(){
    return (
      <section>
      <h1>Welcome to Number Guesser</h1>
        <h3>Your Last Guess Was...</h3>    
      </section>
    )
  }
}
