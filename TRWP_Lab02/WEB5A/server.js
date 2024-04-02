const express = require('express');
const app = express();

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/static' });
});

app.post('/', (req, res) => {
    const x = parseInt(req.headers['x-value-x']);
    const y = parseInt(req.headers['x-value-y']);
  
    const z = x + y;
  
    res.set('X-Value-z', z.toString());
  
    res.send();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});