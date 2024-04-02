const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/static' });
});

app.post('/form1', (req, res) => {
    const x = parseInt(req.headers['x-value-x']);
    const y = parseInt(req.headers['x-value-y']);
  
    const z = x + y;
  
    res.set('X-Value-z', z.toString());
    
    setTimeout(() => {
        res.send();
    }, 10000)
});

app.post('/form2', (req, res) => {
  const n = parseInt(req.headers['x-rand-n']);
  const count = Math.floor(Math.random() * 6) + 5;
  const numbers = generateRandomNumbers(n, count);

  setTimeout(() => {
        res.send(numbers);
    }, 1000)
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