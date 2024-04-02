const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/static' });
});

app.post('/', (req, res) => {
  const n = parseInt(req.headers['x-rand-n']);
  const count = Math.floor(Math.random() * 6) + 5;
  const numbers = generateRandomNumbers(n, count);
  res.json(numbers);
});

function generateRandomNumbers(n, count) {
  const min = -n;
  const max = n;
  const numbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(randomNumber);
  }
  return numbers;
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});