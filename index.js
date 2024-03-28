const express = require("express");
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  res.send([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send({ id, name: "John" });
});

app.listen(3000, () => {
  console.log("Microservice listening on port 3000");
});
