angular.module('register-service', [])
.factory('RegisterService', function($http){
	return {
		register: function(registerParams) {
			var request_data = new Object();
			request_data.username = registerParams.username;
			request_data.phoneNumber = registerParams.phoneNumber;
			request_data.password = registerParams.password;
			return $http({
				method: "POST",
				url: "http://localhost:10101/user/register",
				data: JSON.stringify(request_data),
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			});
		}
	}
});