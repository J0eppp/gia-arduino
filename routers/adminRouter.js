const router = require('express').Router();

router.get("/", function (req, res) {
  res.send("admin page");
});

module.exports = router;
