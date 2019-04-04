const router = require('express').Router();
const fs = require('fs');

var dashboard = {};

dashboard = fs.readFileSync("./data/dashboard.json");

setInterval(function () {
  dashboard = fs.readFileSync("./data/dashboard.json");
}, 10000);

router.get("/", function (req, res) {
  res.send(dashboard);
})

module.exports = router;
