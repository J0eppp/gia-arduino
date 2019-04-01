const router = require('express').Router();
const uploadRouter = require('./uploadRouter');

router.get("/", function (req, res) {
  res.send("GIA");
});

router.use("/upload", uploadRouter);

module.exports = router;
