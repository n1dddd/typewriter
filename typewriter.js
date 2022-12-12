const sentence = "hello there from lighthouse labs, and you are joining me with";

const charCycleFunction = (string) => { //Takes in string
  let increaseTimer = 0; //Initialize timer at 0
  for (const char of string) { //Loops through string
    setTimeout(() => {
      process.stdout.write(char); //prints chars on same line, 50ms apart
    }, increaseTimer);
    increaseTimer += 50; //through each iterations of loop, add 50ms to timer for each setTimeOut call within char loop
  }
  setTimeout(() => {
    process.stdout.write("\n"); //start next prompt on new line after type
  }, increaseTimer); //goes through for loop first, and at end of main uses updated timer, showing up instantly after completion
};

charCycleFunction(sentence);


