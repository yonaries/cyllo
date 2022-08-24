require('dotenv').config()
import express = require('express');

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Express is Connected to http://localhost:${process.env.PORT}`);
})
