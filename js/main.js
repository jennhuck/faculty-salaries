console.log("juice");
$('document').ready(function(){
	$("#faculty-salaries-link").hover(
		function(){
			console.log("hovered");
			$(".masthead").css({'background-color': "transparent",
								'color':'white'});
			$(".full-page").css({'background-image': "url(\"../img/chaplin.jpg\")"});
			$('.topic').hide();
			$(this).css({'color': 'white'}).show();

		},
		function(){
			console.log("hover out");
			$(".masthead").css({'background-color': "white",
								'color':'#ffd6e3'});
			$(".full-page").css({'background-image': "none"});
			$('.topic').show();
			$('.topic').css({'color': '#51343d'});

		});
});

