const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE;


mongoose
  .connect(DB)
  .then(() => {
    console.log('DB Connected successfull !');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on port  ${PORT} !`);
});
