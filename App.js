import React, { useState } from "react";
import Hangman from "./components/Hangman";
import "./Css/App.css";
import { randomWord } from "./components/RandomWord";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import Help from "./components/Help";
import Header from "./components/Header";

function App() {
  // creates a state variable called gameState and setGameState to change the state of gameState
  const [gameState, setGameState] = useState(false);

  // creates a state variable called showHelp and setShowHelp to change the state of showHelp
  const [showHelp, setShowHelp] = useState(false);
  return (
    <div className="App">
     
      <Header/>
      
     
      <Hangman
        gameState={gameState} // this passes the value of gameState to the Hangman component
        setGameState={setGameState} // this passes the setGameState function to the Hangman component
        maxWrong={6} // this sets the maxWrong property of the Hangman component to 6
        images={[image0, image1, image2, image3, image4, image5, image6]} // this sets the images property of the Hangman component to the imported images 0 - 6
        answer={randomWord()} // this sets the answer property of the Hangman component to a randomly selected word
      />

     
      <Help showHelp={showHelp} setShowHelp={setShowHelp} />
    </div>
  );
}

export default App;
