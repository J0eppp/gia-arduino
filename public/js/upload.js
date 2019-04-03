window.onload = function () {
  var username = localStorage.getItem("username");
  if (!(typeof username === undefined || username === null)) {
    document.getElementById('usernameInput').value = username;
  }
}

function saveUsername() {
  var username = document.getElementById('usernameInput').value;
  localStorage.setItem("username", username);
}
