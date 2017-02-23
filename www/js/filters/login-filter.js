angular.module('login-filter', [])
.filter('LoginFilter', function(){
	return function(input) {
		return input.replace(/tank/, "====");
	};
});