const { Router } = require("express");

function createNewMessageRouter() {
  const newMessageRouter = Router();

  newMessageRouter.get("/", (req, res) => {
    res.render("form");
  });

  return newMessageRouter;
}

module.exports = createNewMessageRouter;
