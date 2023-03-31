const express = require('express');
const dotenv = require('dotenv');

dotenv.config({});
const app = express();

app.use(express.json());

app.get('/', (req, res) => {});

app.post('/', (req, res) => {
  const { array } = req.body;
  const userId = 'aryanpathak_10/08/2002';
  const emailId = 'aryanpathak989@gmail.com';
  const collegeRollNumber = Math.random() * 30;
  const evenArray = [];
  const oddArray = [];
  const alphabetArray = [];

  for (let i = 0; i < array.length; i++) {
    if (
      (array[i] >= 'a' && array[i] <= 'z') ||
      (array[i] >= 'A' && array[i] <= 'Z' && typeof array[i] == string)
    ) {
      alphabetArray.push(array[i].toUpperCase());
    } else if (array[i] % 2 == 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  console.log(evenArray);
  console.log(oddArray);
  console.log(alphabetArray);

  const obj = {
    Status: true,
    userId: userId,
    emailId: emailId,
    collegeTollNumber: collegeRollNumber,
    evenArray: evenArray,
    oddArray: oddArray,
    alphabetArray: alphabetArray,
  };

  res.json(obj);
});

app.listen(process.env.PORT, (req, res) => {
  console.log('Server is running at ', process.env.PORT);
});
