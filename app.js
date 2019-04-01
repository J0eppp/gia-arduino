const express = require('express');
const router = require('./routers/router');
const fileUpload = require('express-fileupload');

const app = express();
const server = app.listen(80, function () {
  console.log("The server is listening at port 80!");
});

app.set("view engine", "ejs")

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/"
}))

app.use(router);
