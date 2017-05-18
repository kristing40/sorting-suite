function genRandNum (count) {
  let numArray = [];

  for (let i = 0; i <= count; i++) {
    let randomNumber = Math.floor(Math.random() * 1000);

    numArray.push(randomNumber);
  }

  return numArray;
}
export default genRandNum;
