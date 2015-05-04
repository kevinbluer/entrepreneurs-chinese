var helloApp = angular.module("entrepreneursChinese", ['ngRoute']);

helloApp.config(function($routeProvider){
	$routeProvider
		.when( '/home', { controller: 'HomeControlller', templateUrl: 'view-home.html' } )
		.when( '/quiz', { controller: 'QuizControlller', templateUrl: 'view-quiz.html' } )
		.when( '/contact', { controller: 'ContactControlller', templateUrl: 'view-contact.html' } )
		.otherwise( { redirectTo: '/home' } );
})

.controller('HomeControlller', function($scope) {
  
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

			default:
				alert("No more pages!")

				break;
		}
	}

})

.controller('ContactControlller', function($scope) {

})