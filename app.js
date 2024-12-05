const express = require('express');
const app = express();
const path = require('node:path');
const createIndexRouter = require("./routes/indexRoute");
const createNewMessageRouter = require("./routes/newRoute.js")

const PORT = 8000

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.use(express.urlencoded({ extended: true }));
app.use("/", createIndexRouter(messages))
app.use("/new", createNewMessageRouter())

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
}).on("error", (err) => {
    console.error("Failed to start server", err)
})