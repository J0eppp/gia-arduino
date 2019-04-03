var reqFolder = document.location.pathname.split("/")[2];
var folder;

$.get("/uploads/get/folder/" + reqFolder, function (data) {
  folder = data;
  document.getElementById('title').innerHTML = reqFolder;
});
