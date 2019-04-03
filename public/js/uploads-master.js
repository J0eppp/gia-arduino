function addElement(tag, element) {
  document.getElementsByTagName(tag)[0].appendChild(element);
}

var usersFolders;

window.onload =  function () {
  $.get("/uploads/get/userFolders", function (data) {
    usersFolders = data;
    for (var i = 0; i < usersFolders.length; i++) {
      document.body.innerHTML += "<a href='/uploads/" + usersFolders[i] + "'>" + usersFolders[i] + "</a><br>";
    }
  });
}
