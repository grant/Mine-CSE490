$(function() {
	var PREFIX = "img/uploads/";
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


		// Uploading a pic
		$("a#picUpload").bind('click', function() {
			$(":input[type=file]").click();
			return false;
		});

		$('#fileUpload').change(function() {
			var fullPath = getFullPath();
			console.log(fullPath);
			$('#uploadedPic').attr('src', fullPath);
		});
	}

	function getFullPath () {
		var fullPath = document.getElementById('fileUpload').value;
		if (fullPath) {
			var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
			var filename = fullPath.substring(startIndex);
			if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
				filename = filename.substring(1);
			}
			return PREFIX + filename;
		}
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

