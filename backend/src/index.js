import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import 'dotenv/config';
import referralRouter from "./routes/referral";
import connectDb from "./utils/db";

const app = express();
const port = process.env.API_PORT || 8080;
const apiVersion = process.env.API_VERSION || 'v1'

// connect to db
connectDb()

// cors middleware
app.use(cors())

// parse application-json
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("Referral Back-end API");
});

// routes
app.use(`/api/${apiVersion}/referral`, referralRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
