let myWords = [
    "java",
    "basic",
    "because",
    "not",
    "all",
    "words",
    "are",
    "the",
    "same",
    "size",
    "so",
    "we",
    "have",
  ];
  
  function randomWord() {
    return myWords[
      Math.floor(Math.random() * myWords.length)
    ];
  }
  
  export { randomWord };