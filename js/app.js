$(function() {

	$("#hello").click(function() {
		$("#title").text("Hello World");
	});

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

});

