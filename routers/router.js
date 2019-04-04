const router = require('express').Router();
const uploadRouter = require('./uploadRouter');
const uploadsRouter = require('./uploadsRouter');
const adminRouter = require('./adminRouter');
const dashboardRouter = require('./dashboardRouter');

router.get("/", function (req, res) {
  res.send("GIA");
});

router.use("/upload", uploadRouter);
router.use("/uploads", uploadsRouter)
router.use("/admin", adminRouter);
router.use("/dashboard", dashboardRouter);

module.exports = router;
