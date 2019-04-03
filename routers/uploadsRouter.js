const router = require('express').Router();
const fs = require('fs');

router.get("/", function (req, res) {
  // if (req.params.folderName) {
  //   var folderName = req.params.folderName;
  //   if (fs.existsSync("./uploads/" + folderName + "/")) {
  //     var folder = fs.readdirSync("./uploads/" + folderName + "/");
  //     res.send(folder);
  //   } else {
  //     res.send(false)
  //   }
  // }
  var userFolders = fs.readdirSync("./uploads/");
  res.render("uploads-master");
});

router.get("/getFolder/:folderName", function (req, res) {
  var folderName = req.params.folderName;
  if (fs.existsSync("./uploads/" + folderName + "/")) {
    var folder = fs.readdirSync("./uploads/" + folderName + "/");
    res.send(folder);
  } else {
    res.send(false)
  }
});

router.get("/getUserFolders", function (req, res) {
  var userFolders = fs.readdirSync("./uploads/");
  console.log(userFolders);
  res.send(userFolders);
});

module.exports = router;
