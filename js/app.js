$(function() {

	$(this).scrollTop(0); // start in the top when user refresh
	// Render Slides:
	$.getJSON("https://api.myjson.com/bins/17ocpi", function(data) {
		renderSliders({sliders: data});
	})


	//Console Comboboxes:
	$( ".select-input" ).change(function() {
		var msg = '<div class="console-cont text-light">Question change: ..... <span>'+someYes()+'</span></div>';
		$(".console").append(msg);	
	});

// ---------------------------- functions --------------------------------------


function renderSliders(data) {
	//render Sliders using Handlebars

	var template = Handlebars.compile($('#slider-template').html());
	var html = template(data);
	// Add the compiled html to the page
	$('.render-sliders').html(html);
	$('.cont-item:first-child').addClass("active"); //active first slider
	setBold(); // set bold last word in title
}

function someYes() {
	//There is at least one "YES" in the selects values

	var arr_selects = $('.select-input');
	for (var i = 0; i < arr_selects.length; i ++) {
		if(arr_selects[i].value == "YES"){
			return "true";
		}
	}
	return "false";	
}

function setBold(argument) {
	var arr_titles = $(".title_slide").map(function(){
		//Modify array adding <b></b> last word
		var title = $(this).text();
		var arr = title.split(" ");
		var lastword = arr[arr.length -1];
		var lw_mod = "<b>"+lastword+"</b>";
		arr.pop();
		var str = arr.join(" ");
		$(this).html(str +" "+ lw_mod);
		return str +" "+ lw_mod;
	}).get();
	
}

Handlebars.registerHelper('toUpperCase', function(str) {
	//Title slider Uppercase
	return str.toUpperCase();
});

});