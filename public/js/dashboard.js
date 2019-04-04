var dashboard = {};

$.get("/dashboard/get", function (data) {
  gotData(data);
});

function gotData(data) {
  dashboard = JSON.parse(data);
  console.log(dashboard);
  var table = document.getElementById('table');
  for (var name in dashboard.users) {
    if (dashboard.users.hasOwnProperty(name)) {
      table.innerHTML += "<tr><td>" + name + "</td><td>" + dashboard.users[name].score + "</td></tr>"
    }
  }
}
