function addElement(tag, element) {
  document.getElementsByTagName(tag)[0].appendChild(element);
}

var usersFolders;

window.onload =  function () {
  $.get("/uploads/getUserFolders", function (data) {
    usersFolders = data;
    // var usersFoldersDiv = document.createElement("div");
    // div.id = "usersFolders";
    for (var i = 0; i < usersFolders.length; i++) {
      document.body.innerHTML += "<a href='/uploads/getFolder/" + usersFolders[i] + "'>" + usersFolders[i] + "</a><br>";
    }
  });
}
