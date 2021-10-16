const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}) );
app.use(express.static(`${__dirname} /../client/dist`));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/shops', (req, res) => {
  db.getShops((result) => {
    // console.log(result);
    res.send(result)
  })
});

app.get('/drinks', (req, res) => {
  db.getDrinks((result) => {
    // console.log(result);
    res.send(result)
  })
});

app.get('/comments', (req, res) => {
  db.getComments((result) => {
    // console.log(result);
    res.send(result)
  })
});

app.post('/submitComment', (req, res) => {
  db.insertComment(req.body, (result) => {
    // console.log(result);
    res.send(result)
  })
});

app.listen(port, () => {
  console.log(`babo app listening at http://localhost:${port}`)
})