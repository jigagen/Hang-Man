import React, { Component } from "react";
import { randomWord } from "./RandomWord";
import "../Css/Hangman.css";
import image0 from "../images/0.jpg";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";


//created Hangman component and the default props are being defined
class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [image0, image1, image2, image3, image4, image5, image6],
  };

//created constructor and the props are being passed into it
  constructor(props) {
    super(props);
    this.state = {
      noOfWrong: 0,
      guessed: new Set(),
      answer: props.answer,z
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

//created reset function to reset the game
  reset() {
    this.setState({
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  }

//created guessedWord function to check if the guessed letter is included in the answer
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

// created handleGuess function to set the guessed letter and the number of wrong guesses 
  handleGuess(evt) {
    let letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),
    }));
  }

//created generateKeyPad function to create the keypad of alphabet
  generateKeypad() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

// created render function to render the game
  render() {
    const gameOver = this.state.noOfWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateKeypad();
    if (isWinner) gameState = "Congrats, You have won the Game";
    if (gameOver) gameState = "Better Luck Next Time";
    let restart = gameOver || isWinner;
    return (
      <div className="Hangman">
        <h2>Hangman</h2>
        <img src={this.props.images[this.state.noOfWrong]} alt="HangMan" />
        <p>
          Guessed Left: {this.props.maxWrong - this.state.noOfWrong} /{" "}
          {this.props.maxWrong}
        </p>
        <p>Guess the word</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className="Hangman-btns">{gameState}</p>
        {restart && (
          <button id="reset" onClick={this.reset}>
            Restart?
          </button>
        )}
      </div>
    );
  }
}

export default Hangman;