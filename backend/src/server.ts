require('dotenv').config()
import express = require('express');
import { userRouter } from './routes/user';
const cors = require('cors')

if (!process.env.JWT_KEY) {
  console.error("FATAL ERROR: JWT PRIVATE KEY is not defined!");
  process.exit(1)
};

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).send('Hello Cyllo..');
})

app.listen(process.env.PORT, () => {
  console.log(`Express is Connected to http://localhost:${process.env.PORT}`);
})
