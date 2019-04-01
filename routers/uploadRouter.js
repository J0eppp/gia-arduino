const router = require('express').Router();

router.get("/", function (req, res) {
  res.send("<form action='/upload' method='post' enctype='multipart/form-data'><input type='file' name='file'><input type='submit' value='Upload'>")
})

router.post("/", function (req, res) {
  var file = req.files.file;
  file.mv("./uploads/" + file.name, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    } else {
      res.send("Uploaded!")
    }
  });
});

module.exports = router;
