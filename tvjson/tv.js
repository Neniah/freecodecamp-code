var channels = ["freecodecamp",
								"vgbootcamp",
								"meleeitonme",
								"texasmelee",
								"azprojectmelee",
								"comster404",
								"austinmelee",
								"inostupid",
								"kingdime",
								"robotcaleb"
							 ]

$(document).ready(function() {
	channels.forEach(function(val) {
		getTwitchData(val);
	});

	$("#search-box").keyup(function() {
		var searchQuery = document.getElementById("search-box").value;

		// look at every card; if card's id does not contain searchQuery, hide it
		$(".channel-card").each(function( index ) {
			$(this).hide();
			if ($(this).attr("id").indexOf(searchQuery) !== -1) {
				$(this).show();
			}
		});
	});



	$("#add-channel-button").click(function() {
		var formSubmission = document.getElementById("channel-box").value;
		document.getElementById("channel-box").value = "";
		// if a box with id of formSubmission doesn't exist, then:
		getTwitchData(formSubmission);
	});

	$("#show-all").click(function() {
		$(".channel-card").show();
	});

	$("#show-online").click(function() {
		$(".online-card").show();
		$(".offline-card").hide();
		$(".error-card").hide();
	});

	$("#show-offline").click(function() {
		$(".offline-card").show();
		$(".online-card").hide();
		$(".error-card").hide();
	});
});

/* =============================== */

function getTwitchData(channel) {
	var urlStream = "https://api.twitch.tv/kraken/streams/" + channel;
	var urlChannel = "https://api.twitch.tv/kraken/channels/" + channel;

	$.ajax({
		url: urlStream,
		//jsonp: "jsonp",
		//dataType: "jsonp",
		success: function(response) {
			if (response.stream == null) {
				$.ajax({
					url: urlChannel,
					//jsonp: "jsonp",
					//dataType: "jsonp",
					success: addChannel
				})
			}
			else {
				addStream(response);
			}
		},
		error: function(response) {
			var errorCard = generateErrorCard(channel);
			$("#list").append(errorCard);
		}
	})
}

function addChannel(data) {
	var card;
	card = generateOfflineCard(data.display_name, data.logo);
	$("#list").append(card);
}

function addStream(data) {
	var card;
	console.log(data.stream.preview.medium);
	card = generateCard(data.stream.channel.display_name, data.stream.channel.logo, data.stream.game, data.stream.channel.status);
	$("#list").append(card);
}

function generateCard(name, logo, game, description) {
	var resultCard = "<div class='channel-card online-card' id='" + name.toLowerCase() + "'>";
	resultCard += "<a href='http://www.twitch.tv/" + name + "'><img class='card-logo' width=100px src='" + logo + "' alt='" + name + " channel logo'></a>";
	resultCard += "<h1 class='card-name'><a href='http://www.twitch.tv/" + name + "'>" + name + "</a></h1>";
	resultCard += "<span class='status status-online fa fa-twitch'></span>";
	resultCard += "<h2>streaming: </h2><h3>" + game + "</h3>";
	resultCard += "<h4>\"" + description + "\"</h4></div>";
	return resultCard;
}

function generateOfflineCard(name, logo) {
	var resultCard = "<div class='channel-card offline-card' id='" + name.toLowerCase() + "'>";
	resultCard += "<a href='http://www.twitch.tv/" + name + "'><img class='card-logo' width=100px src='" + logo + "' alt='" + name + " channel logo'></a>";
	resultCard += "<h1 class='card-name'><a href='http://www.twitch.tv/" + name + "'>" + name + "</a></h1>";
	resultCard += "<span class='status status-offline fa fa-twitch'></span>";
	resultCard += "<h2>OFFLINE</h2>";
	resultCard += "</div>";
	return resultCard;
}

function generateErrorCard(name) {
	var resultCard = "<div class='channel-card error-card' id='" + name.toLowerCase() + "'>";
	resultCard += "<a href='http://www.twitch.tv/" + name + "'><img class='card-logo' width=100px src=''></a>";
	resultCard += "<h1 class='card-name'><a href='http://www.twitch.tv/" + name + "'>" + name + "</a></h1>";
	resultCard += "<span class='status status-error fa fa-twitch'></span>";
	resultCard += "<h2>CHANNEL DOES NOT EXIST</h2>";
	resultCard += "</div>";
	return resultCard;
}
