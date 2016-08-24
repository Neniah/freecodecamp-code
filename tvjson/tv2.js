$(document).ready(function() {
  var usrName = "";
  var usrURL = "";
  var usrLogo = "";
  var usrStatus = "";
  var usrStream = "";
  var html = "";
  var users = ["freecodecamp", "brunofin", "comster404", "storbeck", "terakilobyte", "MedryBW", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "Monstercat"];

  function displayUser(usrName, usrURL, usrLogo, usrStatus, usrStream) {
    if (usrLogo == null) {
      usrLogo = "https://api.adorable.io/avatars/70/susan%40adorable.io";
    }
    html = "";
    html += "<li id='" + usrName + "' class='" + usrStatus + "'>";
    if (usrStatus != "unavailable") {
      html += "<a href='" + usrURL + "' target='_blank'>";
    }
    html += "<img src='" + usrLogo;
    html += "' class='logo img-circle' alt='";
    html += usrName + " logo'>";
    html += "<strong>" + usrName + "</strong>";
    html += " is " + usrStatus;
    if (usrStatus == "unavailable") {
      html += ". This user cannot be found on Twitch.tv.";
    }
    if (usrStream != "") {
      html += " streaming: <span class='streamTitle'>" + usrStream + "</span>";
    }
    if (usrStatus != "unavailable") {
      html += "</a>" + "</li>";
    } else {
      html += "</li>";
    }

  }  // displayusers function 

  users.forEach(function(user) {

    $.getJSON("https://api.twitch.tv/kraken/streams/" + user + "?callback=?", function(data) {

      if (data["stream"] != null) {

        usrName = data["stream"]["channel"]["display_name"];
        usrURL = data["stream"]["channel"]["url"];
        usrLogo = data["stream"]["channel"]["logo"];
        usrStatus = "online";
        usrStream = data["stream"]["game"];
        displayUser(usrName, usrURL, usrLogo, usrStatus, usrStream);
        $("#streamers").append(html);

      } else if (data["stream"] == null) {

        $.getJSON("https://api.twitch.tv/kraken/channels/" + user + "?callback=?", function(data) {
          if ("error" in data) {
            usrName = user;
            usrURL = "";
            usrLogo = "https://api.adorable.io/avatars/70/susan%40adorable.io";
            usrStatus = "unavailable"
            usrStream = "";
            displayUser(usrName, usrURL, usrLogo, usrStatus, usrStream);
            $("#streamers").append(html);
          } else {
            usrName = data["display_name"];
            usrURL = data["url"];
            usrLogo = data["logo"];
            usrStatus = "offline";
            usrStream = "";
            displayUser(usrName, usrURL, usrLogo, usrStatus, usrStream);
            $("#streamers").append(html);
          }
        });
      }
    });
  });
});
