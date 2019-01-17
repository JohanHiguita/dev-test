$(function() {


	// Render Slides:
	$.ajax({
		method: "GET",
		url: "https://api.myjson.com/bins/17ocpi"
	}).done(function(data) {
		renderSliders(data);
	}).fail(function() {
		alert("Error");
	});

	//Console Comboboxes:
	$( ".select-input" ).change(function() {
		var msg = '<div class="console-cont text-light">Question change: ..... <span>'+someYes()+'</span></div>';
		$(".console").append(msg);	
	});

// ---------------------------- functions --------------------------------------

function renderSliders(data) {
	//Render de Values from the API in teh sliders

	slide_1 = data['slide_1'];
	slide_2 = data['slide_2'];
	slide_3 = data['slide_3'];
	// images:
	$("#img_slide1").attr("src",slide_1.image);
	$("#img_slide2").attr("src",slide_2.image);
	$("#img_slide3").attr("src",slide_3.image);
	//Titles:
	$("#title_slide1").text(slide_1.title);
	$("#title_slide2").text(slide_2.title);
	$("#title_slide3").text(slide_3.title);
	//content texts:
	$("#content_slide1").text(slide_1.text);
	$("#content_slide2").text(slide_2.text);
	$("#content_slide3").text(slide_3.text);
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



});