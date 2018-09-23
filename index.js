require('./config/config');
const express = require('express');
// const _ = require('lodash');
const bodyParser = require('body-parser');

const places = require('./tisseo/places');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/places/:searchString', (req, res) => {
  places.search(req.params.searchString).then((result) => {
    res.send(result);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});

module.exports = {app};
