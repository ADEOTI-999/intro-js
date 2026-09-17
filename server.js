require("dotenv").config();

const express = require("express"); //Import framework
const app = express(); //Create app instance
const port = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

app.get("/", (req, res) => {
  res.send("My Week 2 API");
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Missing fields" });
  }
  app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.send(`User ${id} profile`);
  });

  res.status(201).json({ message: `Hello ${name}` });
});
app.listen(port, () => {
  //Start Server
  console.log(`Example app listening on port ${port}`);
});
