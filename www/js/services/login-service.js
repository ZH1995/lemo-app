angular.module('login-service', [])
.factory('LoginService', function($http){

	return {
		login: function(formUser) {
			var request_data = new Object();
			request_data.username = formUser.phoneNumber;
			request_data.password = formUser.password;
			return $http({
				method: "POST",
				url: "http://localhost:10101/user/login",
				data: JSON.stringify(request_data),
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			});
		}
	}
});