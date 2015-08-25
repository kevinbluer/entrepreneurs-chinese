var helloApp = angular.module("entrepreneursChinese", ['ngRoute']);

helloApp.config(function($routeProvider){
	$routeProvider
		.when( '/home', { controller: 'HomeControlller', templateUrl: 'view-home.html' } )
		.when( '/quiz', { controller: 'QuizControlller', templateUrl: 'view-quiz.html' } )
		.when( '/contact', { controller: 'ContactControlller', templateUrl: 'view-contact.html' } )
		.when( '/videos', { controller: 'VideosControlller', templateUrl: 'view-videos.html' } )
		.otherwise( { redirectTo: '/home' } );
})

.controller('HomeControlller', function($scope) {
  
})

.controller('VideosControlller', function($scope) {
  
})

.controller('QuizControlller', function($scope) {

	// contains the current page that we're currently on
	var currentPage = 1;

	// show the first panel (note that the others are implicitly hidden)
	$scope.initialize = function() {
		$scope.q1 = true;
	}

	$scope.a1 = function(answer) {

		// show the results panel
		$scope.resultPanel1 = true;

		if (answer === 2) {
			$scope.result1 = true;
		} else {
			$scope.result1 = false;
		}
	}

	$scope.back = function() {
		
		switch (currentPage) {
			case 1:
				alert("You're already at the start!")
				break;

			case 2:
				$scope.q1 = true;
				$scope.q2 = false;
				currentPage = 1;
				break;

			case 3:
				$scope.q2 = true;
				$scope.q3 = false;
				currentPage = 2;
				break;

			case 4:
				$scope.q3 = true;
				$scope.q4 = false;
				currentPage = 3;
				break;				

			case 5:
				$scope.q4 = true;
				$scope.q5 = false;
				currentPage = 4;
				break;

			default:
				alert("No more pages!")
				break;
		}

	}

	$scope.next = function() {

		switch (currentPage) {
			case 1:
				$scope.q1 = false;
				$scope.q2 = true;
				currentPage = 2;
				break;

			case 2:
				$scope.q2 = false;
				$scope.q3 = true;
				currentPage = 3;
				break;

			case 3:
				$scope.q3 = false;
				$scope.q4 = true;
				currentPage = 4;
				break;

			case 4:
				$scope.q4 = false;
				$scope.q5 = true;
				currentPage = 5;
				break;				

			default:
				alert("No more pages!")
				break;
		}
	}

})

.controller('ContactControlller', function($scope) {

})