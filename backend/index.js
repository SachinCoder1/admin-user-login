import connectToMongo from "./db.js";
connectToMongo();
import cors from "cors";
import router from "./routes/router.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
