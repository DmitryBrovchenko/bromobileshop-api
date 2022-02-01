const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, async () => {
  console.log(`Server is running at port ${port}`);
});

app.get('/now', 
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => res.json({ time: req.time }) 
);
app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word });
});