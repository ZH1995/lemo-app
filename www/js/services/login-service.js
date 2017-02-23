angular.module('login-service', [])
.factory('LoginService', function($http){
	
	var userInfo = {
		//messageId: 1000,
		userName:     "夏天",
		phoneNumber:  123456789,
		userPassword: "nicaiciakna",
	};
	
	return {
		login: function(loginParams) {
			//loginParams.phoneNumber
			//loginParams.password
			return userInfo;
		}
	}
});