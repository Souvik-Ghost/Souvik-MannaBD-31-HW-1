let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`The server is listenning on port ${port}`);
});

let numbers = [1, 2, 3, 4, 5];
let strings = ["hello", "world", "javascript", "node"];

//1
function multiplyNumbers(numArray, multiplier) {
  let result = [];
  for (let i = 0; i < numArray.length; i++) {
    result.push(numArray[i] * multiplier);
  }
  return result;
}
app.get("/numbers/multiply", (req, res) => {
  let multiplier = req.query.multiplier;
  let result = multiplyNumbers(numbers, multiplier);
  res.send({ result });
});
//numbers/multiply?multiplier=2

//2
function concateStrings(strArray, suffix) {
  let result = [];
  for (let i = 0; i < strArray.length; i++) {
    result.push(strArray[i] + suffix);
  }
  return result;
}
app.get("/strings/concat", (req, res) => {
  let suffix = req.query.suffix;
  let result = concateStrings(strings, suffix);
  res.send({ result });
});
//strings/concat?suffix=!

//3
function removeOddNumbers(numArray) {
  let result = [];
  for (let i = 0; i < numArray.length; i++){
    if (numArray[i] % 2 === 0) {
      result.push(numArray[i]);
    }
  }
  return result;
}
app.get('/numbers/remove-odds', (req, res) => {
  let result = removeOddNumbers(numbers);
  res.json({ result });
});
//numbers/remove-odds

//4
function joinStrings(strArray) {
  let result = '';
  for ( let i = 0; i < strArray.length; i++) {
    result = result + " " + strArray[i];
  }
  return result;
}
app.get('/strings/join', (req, res) => {
  let result = joinStrings(strings);
  res.json({ result });
});
//strings/join

//5
function dubleNumbers(numArray) {
  let result = [];
  for (let i = 0; i < numArray.length; i++) {
    result.push(numArray[i] * 2);
  }
  return result;
}
app.get('/numbers/double', (req, res) => {
  let result = dubleNumbers(numbers);
  res.json({ result });
});
//numbers/double