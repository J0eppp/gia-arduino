var reqFolder = document.location.pathname.split("/")[2];
var folder;

$.get("/uploads/get/folder/" + reqFolder, function (data) {
  folder = data;
  document.getElementById('title').innerHTML = reqFolder;
  var ff = document.getElementById('files-folders');
  for (var i = 0; i < folder.length; i++) {
    if (folder[i].split(".")[folder[i].split(".").length - 1] === "ino") {
      var x = JSON.stringify(reqFolder + "/" + folder[i]);
      console.log(x);
      document.body.innerHTML += "<a href=/uploads/" + reqFolder + "/" + folder[i] + ">" + folder[i] + "</a> <button onclick='javascript:showCode(" + x + ")'>Show Code</button> <button onclick='downloadFile(" + x + ")'>Download File</button>";
    }
  }
});

function showCode(path) {
  window.location = "/uploads/" + path + "/code";
}

function downloadFile(path) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,');
  element.setAttribute('download', "downloadFile/" + path);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
