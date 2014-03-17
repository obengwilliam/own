$(document).ready(function(){
	// dom links
	var brandrow = $('#brand-row');
	var header = $('#header');

	// nav links
	var about = $('#about');
	var aboutus = $('#aboutus');
	var project = $('#projects');
	var contact = $('#contact');
	var brand = $('#brand');

	// folio links
	var def1 = $('#def-1');
	var def2 = $('#def-2');
	var def3 = $('#def-3');
	var def4 = $('#def-4');

	var abt1 = $('#abt-1');
	var abt2 = $('#abt-2');
	var abt3 = $('#abt-3');
	var abt4 = $('#abt-4');

	var proj1 = $('#proj-1');
	var proj2 = $('#proj-2');
	var proj3 = $('#proj-3');
	var proj4 = $('#proj-4');

	var cont1 = $('#cont-1');
	var cont2 = $('#cont-2');
	var cont3 = $('#cont-3');
	var cont4 = $('#cont-4');

	var pkg1 = $('#pkg-1');
	var pkg2 = $('#pkg-2');
	var pkg3 = $('#pkg-3');
	var pkg4 = $('#pkg-4');

	var img = $('#slide');

	var defaults = [def1, def2, def3, def4];
	var abouts = [abt1, abt2, abt3, abt4];
	var projects = [proj1, proj2, proj3, proj4];
	var contacts = [cont1, cont2, cont3, cont4];
	var packages = [pkg1, pkg2, pkg3, pkg4];

	// nav click events
	brand.click(function(){
		brandrow.css({
			transition : 'background-color 1s ease-in-out',
			"background-color": "black",
			"color": "white"
		});
		// default site views
		for(var each in defaults){
			abouts[each].css('display', 'none');
			projects[each].css('display', 'none');
			contacts[each].css('display', 'none');
			packages[each].css('display', 'none');
			defaults[each].css('display', 'inline');
		}

		// set header
		header.fadeOut('1000', function(){header.text('online website ninjas')});
		header.fadeIn('1000');

		// set slide image
		img.attr('src', 'dist/images/slide-image.jpg');

	});

	aboutus.click(function(){
		brandrow.css({
			transition : 'background-color 1s ease-in-out',
			"background-color": "#330000",
			"color": "#000000"
		});

		//aboutus information
		$('#packages').css('display', 'block');
		for(var each in packages){
			abouts[each].css('display', 'none');
			projects[each].css('display', 'none');
			contacts[each].css('display', 'none');
			defaults[each].css('display', 'none');
		    packages[each].css('display', 'inline');
		}


		//set header
		header.fadeOut('1000', function(){header.text('bespoke celebrity websites')});
		header.fadeIn('1000');

		//set slide image
		img.attr('src', 'dist/images/logo-white.png');
	});

	about.click(function(){
		brandrow.css({
			transition : 'background-color 1s ease-in-out',
			"background-color": "#669900",
			"color": "#000000"
		});
		// team information
		$('#abouts').css('display', 'block');
		for(var each in abouts){
			defaults[each].css('display', 'none');
			projects[each].css('display', 'none');
			contacts[each].css('display', 'none');
			packages[each].css('display', 'none');
			abouts[each].css('display', 'inline');
		}

		// set header
		header.fadeOut('1000', function(){header.text('an awesome team')});
		header.fadeIn('1000');

		// set slide image
		img.attr('src', 'dist/images/logo.png');
	});

	project.click(function(){
		brandrow.css({
			transition : 'background-color 1s ease-in-out',
			"background-color": "#663333",
			"color": "#000000"
		});
		// list our projects
		$('#project').css('display', 'block');
		for(var each in projects){
			defaults[each].css('display', 'none');
			abouts[each].css('display', 'none');
			contacts[each].css('display', 'none');
			packages[each].css('display', 'none');
			projects[each].css('display', 'inline');
		}

		// set header
		header.fadeOut('1000', function(){header.text('see our work in the wild')});
		header.fadeIn('1000');

		// set slide image
		img.attr('src', 'dist/images/logo-white.png');
	});

	contact.click(function(){
		brandrow.css({
			transition : 'background-color 1s ease-in-out',
			"background-color": "#663399",
			"color": "#000000"
		});
		// list our projects
		$('#contacts').css('display', 'block');
		for(var each in contacts){
			defaults[each].css('display', 'none');
			abouts[each].css('display', 'none');
			projects[each].css('display', 'none');
			packages[each].css('display', 'none');
			contacts[each].css('display', 'inline');
		}

		// set header
		header.fadeOut('1000', function(){header.text("we'd love to hear from you")});
		header.fadeIn('1000');

		// don't set slide image
	});

	// set team button click events
	abt1.mouseenter(function(){
		header.fadeOut('1000', function(){header.text('python node.js js/jquery')});
		header.fadeIn('1000');
	});
	abt2.mouseenter(function(){
		header.fadeOut('1000', function(){header.text('team lead customer relations')});
		header.fadeIn('1000');
	});
	abt3.mouseenter(function(){
		header.fadeOut('1000', function(){header.text('python design UI/UX')});
		header.fadeIn('1000');
	});
	abt4.mouseenter(function(){
		header.fadeOut('1000', function(){header.text('css js/jquery node.js')});
		header.fadeIn('1000');
	});

	//set package button click events
	pkg1.mouseenter(function(){
		header.fadeOut('1000', function(){header.text('choose from our packages')});
		header.fadeIn('1000');
	});
	pkg2.mouseenter(function(){
		header.fadeOut('1000', function(){header.text('standard content management')});
		header.fadeIn('1000');
	});
	pkg3.mouseenter(function(){
		header.fadeOut('1000', function(){header.text('social media onsite blog')});
		header.fadeIn('1000');
	});
	pkg4.mouseenter(function(){
		header.fadeOut('1000', function(){header.text('tailor-made website features')});
		header.fadeIn('1000');
	});

	//project showcases
	proj1.mouseenter(function(){
		header.fadeOut('1000', function(){header.text('movie producer speaker')});
		header.fadeIn('1000');
	})
});