const router = require('express').Router();
const bodyParser = require('body-parser');
const fs = require('fs');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", function (req, res) {
  res.send("<form action='/upload' method='post' enctype='multipart/form-data'><input type='text' name='username' placeholder='Username'><input type='file' name='file'><input type='submit' value='Upload'>")
})

router.post("/", urlencodedParser, function (req, res) {
  if (!(req.files.file || req.body.username)) {
    res.send("Error, missing POST parameter!");
  } else {
    var file = req.files.file;
    var username = req.body.username;
    if (!fs.existsSync("./uploads/" + username + "/")) {
      fs.mkdirSync("./uploads/" + username + "/");
    }
    file.mv("./uploads/" + username + "/" + file.name, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      } else {
        res.send("Uploaded!")
      }
    });
  }
});

module.exports = router;
