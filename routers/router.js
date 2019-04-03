const router = require('express').Router();
const uploadRouter = require('./uploadRouter');
const uploadsRouter = require('./uploadsRouter');

router.get("/", function (req, res) {
  res.send("GIA");
});

router.use("/upload", uploadRouter);
router.use("/uploads", uploadsRouter)

module.exports = router;
