angular.module('register-service', [])
.factory('RegisterService', function($http){
	
	var userInfo = {
		//messageId: 1000,
		userName:     "夏天",
		phoneNumber:  123456789,
		userPassword: "nicaiciakna",
	};
	
	return {
		register: function(registerParams) {
			//registerParams.phoneNumber
			//registerParams.password
			return userInfo;
		}
	}
});