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


});