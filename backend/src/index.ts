import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

app.get("/", (_, res) => {
  res.sendFile((path.join(__dirname, "data.json")));

});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
 


