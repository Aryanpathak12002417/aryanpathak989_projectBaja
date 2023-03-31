const express = require('express');
const dotenv = require('dotenv');

dotenv.config({});
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {});

app.post('/', (req, res) => {
  const { data } = req.body;
  const userId = 'aryanpathak_10082002';
  const emailId = 'aryanpathak989@gmail.com';
  const collegeRollNumber = Math.random() * 30;
  const evenArray = [];
  const oddArray = [];
  const alphabetArray = [];

  for (let i = 0; i < data.length; i++) {
    if (
      (data[i] >= 'a' && data[i] <= 'z') ||
      (data[i] >= 'A' && data[i] <= 'Z' && typeof data[i] == string)
    ) {
      alphabetArray.push(data[i].toUpperCase());
    } else if (data[i] % 2 == 0) {
      evenArray.push(data[i]);
    } else {
      oddArray.push(data[i]);
    }
  }
  console.log(evenArray);
  console.log(oddArray);
  console.log(alphabetArray);

  const obj = {
    is_success: true,
    user_id: userId,
    emailId: emailId,
    roll_number: collegeRollNumber,
    even_numbers: evenArray,
    odd_numbers: oddArray,
    alphabets: alphabetArray,
  };

  res.json(obj);
});

app.listen(process.env.PORT, (req, res) => {
  console.log('Server is running at ', process.env.PORT);
});
