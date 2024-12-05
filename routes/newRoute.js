const { Router } = require("express");

function createNewMessageRouter(messages) {
  const newMessageRouter = Router();

  newMessageRouter.get("/", (req, res) => {
    res.render("form");
  });

  newMessageRouter.post("/", (req, res) => {
    const { user, message } = req.body;

    if (user && message) {
      messages.push({
        text: message,
        user: user,
        added: new Date(),
      });
    }

    res.redirect("/");
  });

  

  return newMessageRouter;
}

module.exports = createNewMessageRouter;
