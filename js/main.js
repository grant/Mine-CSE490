$(function() {
	var FADE_DURATION = 200;

	function setup () {
		show('home', 0);

		// Setup click handlers
		$('.createBtn').click(function() {
			show('create');
		});
		$('.homeBtn').click(function() {
			show('home');
		});
		$('.analyticsBtn').click(function() {
			show('analytics');
		});
	}

	function show(name, fadeTime) {
		// Set the hashtag
		window.location.hash = name;

		// Fade to page
		if (typeof fadeTime === 'undefined') {
			fadeTime = FADE_DURATION;
		}
		$('#home').fadeOut(fadeTime);
		$('#analytics').fadeOut(fadeTime);
		$('#create').fadeOut(fadeTime);

		$('#' + name).delay(fadeTime).fadeIn(fadeTime);
	}

	setup();
});

