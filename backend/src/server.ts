require('dotenv').config()
import express = require('express');
import { collectionRouter } from './routes/collection';
import { documentRouter } from './routes/documents';
import { userRouter } from './routes/user';
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/collection", collectionRouter)
app.use("/api/document", documentRouter)

app.get("/", (req, res) => {
  res.status(200).send('Hello Cyllo..');
})

app.listen(process.env.PORT, () => {
  console.log(`Express is Connected to http://localhost:${process.env.PORT}`);
})
