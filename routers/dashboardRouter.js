const router = require('express').Router();
const getDashboardRouter = require('./getDashboardRouter');

router.use("/get", getDashboardRouter);

router.get("/", function (req, res) {
  res.render("dashboard");
});

module.exports = router;
