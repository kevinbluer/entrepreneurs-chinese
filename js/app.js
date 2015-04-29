$(function() {

	var currentPage = 1;

	$("#hello").click(function() {
		$("#title").text("Hello World");
	});

	// handle the clicking of the first question
	$(".q1").click(function(e) {

		// clear any existing results
		$("#answer1").remove();

		var result;

		// get the value of the answer that the user clicked on and display an appropriate message
		if ($(e.target).data("answer") === 2) {
			result = '<div class="alert alert-success" role="alert" id="answer1"><strong>Yes!</strong> You are correct.</div>';
		} else {
			result = '<div class="alert alert-danger" role="alert" id="answer1"><strong>Sorry!</strong> Not this time.</div>';
		}

		// display the result
		$("#question1").append(result);

	});

	$("#next").click(function() {

		var nextPage = currentPage + 1;

		$("#q" + currentPage).hide();
		$("#q" + nextPage).show();
	});

	// TODO add 2 more entries with any china facts
	// TODO make the navbar red (#DE2910) + the logo yello (#FFDE00) and navigation links white (#fff)
	// TODO add a back button
	// TODO add a contact us page (and update all the links)

});

