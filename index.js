import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running with graphql");
});

app.listen(8082, () => {
  console.log("Running at 8082");
});
