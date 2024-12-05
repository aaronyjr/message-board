const { Router } = require("express");

function createIndexRouter(messages) {
  const indexRouter = Router();

  indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages });
  });

  return indexRouter;
}

module.exports = createIndexRouter;
