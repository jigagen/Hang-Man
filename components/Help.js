import React from "react";

function Help(props) {
  //array with the 4 rules of the game
  const rules = [
    "Guess the Programming Language",
    "You have 6 guesses",
    "You lose a guess for every wrong letter you ",
    "You win when you guess the word correctly",
  ];
    //Render the container with the button and rules list
  return (
    <div className="help-container">
        {/* Render the button with the onClick event set to toggle the showHelp prop */}
      <button className="help-button" onClick={() => props.setShowHelp(!props.showHelp)}>
        {props.showHelp ? "Hide Rules" : "Show Rules"}
        {/* {Use ternary operator to set the button text depending on the showHelp prop */}
      </button>
      {/* only render the rules list if the showHelp prop is true */}
      {props.showHelp && (
        <div>
          <ul>
            {/* {Use map to iterate through the rules array and render each rule */}
            {rules.map((rule) => (
              <li>{rule}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Help;
