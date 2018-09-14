//Documentation: https://github.com/katzer/cordova-plugin-local-notifications
//cordova plugin add cordova-plugin-local-notification
//include ID to ensure it works
//Watch out! January is 0th month, December is 11th...
//"notification" is abbreviated to "not"
function createNotification (year,month,day,hour,minute,notificationID,title,message) {
	cordova.plugins.notification.local.schedule({
			id: notificationID,
	    title: title,
	    text: message,
	    trigger: { at: new Date(year, month, day, hour, minute) }
	});

	console.log("Sent notifications");

	/*
	Below are a few examples of notifications

	cordova.plugins.notification.local.schedule({
		id: getRandomInt(10000),
		vibrate: true,
	    title: 'Minute',
	    text: 'Noooo ' + localStorage.getItem("address"),
			trigger: { in: hour, unit: 'second' }
	}); */
	/* Delete all scheduled
 */
	/*
	cordova.plugins.notification.local.schedule({
			title: 'METER Project: ',
			text: "It's time to take record some activites!",
			foreground: true
	}); */
	/*
	cordova.plugins.notification.local.schedule({
		led: { color: '#FF00FF', on: 500, off: 500 },
		vibrate: true,
		color: "672384",
    title: 'Do you want to take more recordings?',
    actions: [{ id: 'yes', title: 'Yes', launch: true },
        { id: 'no',  title: 'No' }]
	});
	*/
	/*
	cordova.plugins.notification.local.schedule({
    title: 'Take more readings',
    text: 'Now',
		trigger: { at: new Date(2018, 8, 22, 12) }
	});
	*/

	/*
	if (localStorage.getItem('survey root') == 'survey complete') {
		cordova.plugins.notification.local.schedule({
			title: 'Design team meeting',
			trigger: { in: 1, unit: 'hour' }
		});
	}
	*/
	/*
	cordova.plugins.notification.local.on('yes', function (notification, eopts) {
		console.log("yes");
	});
	*/
}


//Below are functions to manage notifications
//More can be found here https://github.com/katzer/cordova-plugin-local-notifications/blob/example-x/www/js/index.js
function checkAllNots() {
	cordova.plugins.notification.local.getScheduled(function (nots) {
						console.log("Scheduled: ");
						console.log(nots);
	});
	cordova.plugins.notification.local.getAll(function (nots) {
						console.log("All: ");
						console.log(nots);
	});
	cordova.plugins.notification.local.getTriggered(function (nots) {
						console.log("Triggered: ");
						console.log(nots);
	});
}

function checkNotPermission() {
	cordova.plugins.notification.local.hasPermission(function (granted) {
		console.log(granted);
		return granted;
		//Note: browser notifcations not supported, must debug on mobile build
	});
}

function requestNotPermission() {
	cordova.plugins.notification.local.requestPermission(function (granted) {
		console.log(granted);
		//return granted;
  });
}

function deleteSingleNot (notificationID) {
	cordova.plugins.notification.local.getIds(function (ids) {
		cordova.plugins.notification.local.cancel(notificationID, app.ids);
	});
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function deleteAllNots () {
	cordova.plugins.notification.local.getIds(function (ids) {
		cordova.plugins.notification.local.cancelAll(ids);
	});
}

function spamNotification () {
	for (var i = 1; i < 1000; i++) {
		cordova.plugins.notification.local.schedule({
			id: getRandomInt(100000),
			vibrate: true,
				title: 'Many notificatiosn',
				text: 'Test ' + localStorage.getItem("address"),
				trigger: { in: i*5, unit: 'second' }
		});
	}
}
