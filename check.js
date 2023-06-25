const check = (guessWord, word) => {
  if (guessWord.length !== word.length) {
    throw new Error("Input arrays must have equal length");
  }
  const output = [];
  for (let i = 0; i < guessWord.length; i++) {
    if (word[i] === guessWord[i]) {
      output.push(2);
    } else if (word.includes(guessWord[i])) {
      output.push(1);
    } else {
      output.push(0);
    }
  }

  return output;
};
export default check;
