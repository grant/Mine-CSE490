$(function() {
	var PREFIX = "img/uploads/";
	var FADE_DURATION = 200;

	var campaigns = [{

	}];

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
			loadViz1();
		});


		// Uploading a pic
		$("a#picUpload").bind('click', function() {
			$(":input[type=file]").click();
			$('.campaignPicArea').css('visibility', 'hidden');
			return false;
		});

		$('#fileUpload').change(function() {
			var fullPath = getFullPath();
			$('.campaignPicArea').css('visibility', 'visible');
			$('#uploadedPic').css('visibility', 'visible').attr('src', fullPath);
		});

		$('#uploadedPic').click(function() {
			console.log('clicked');
		});

		$('#campaign1').click(function() {
			loadViz1();
		});
		$('#campaign2').click(function() {
			loadViz2();
		});
	}

	function loadViz1 () {
		$('.vizArea').html("<script type='text/javascript' src='http://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 604px; height: 969px;'><noscript><a href='http:&#47;&#47;www.tableausoftware.com&#47;public&#47;blog&#47;2010&#47;07&#47;online-advertising'><img alt='Global Online Ad Spend 2009 (Figs: IAB Europe) ' src='http:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;In&#47;InternetAdvertisingSpend2009_2&#47;InternetAdSpend2009&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='604' height='969' style='display:none;'><param name='host_url' value='http%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='InternetAdvertisingSpend2009_2&#47;InternetAdSpend2009' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='http:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;In&#47;InternetAdvertisingSpend2009_2&#47;InternetAdSpend2009&#47;1.png' / > <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div><div style='width:604px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=http://public.tableausoftware.com/views/InternetAdvertisingSpend2009_2/InternetAdSpend2009' target='_blank'>Learn About Tableau</a></div></div>");
	}

	function loadViz2 () {
		$('.vizArea').html("<script type='text/javascript' src='http://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 649px; height: 850px;'><noscript><a href='http:&#47;&#47;www.tableausoftware.com&#47;public&#47;gallery&#47;public-money-advertising'><img alt='Armado final ' src='http:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;N4&#47;N46MCBTS8&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='649' height='850' style='display:none;'><param name='host_url' value='http%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='path' value='shared&#47;N46MCBTS8' / > <param name='toolbar' value='yes' /><param name='static_image' value='http:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;N4&#47;N46MCBTS8&#47;1.png' / > <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div><div style='width:649px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=http://public.tableausoftware.com/shared/N46MCBTS8' target='_blank'>Learn About Tableau</a></div></div>");
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

