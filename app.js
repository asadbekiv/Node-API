const express = require('express');
const productRoute = require('./routes/productRoutes.js');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', productRoute);

const formHtml = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');

// Sending HTML form.
app.get('/practise', (req, res) => {

  res.end(formHtml);
});

module.exports = app;
