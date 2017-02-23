angular.module('personal-service', [])
.factory('PersonalService', function($http){
	
	var userInfo = {
		//messageId: 1000,
		userName:     "夏天",
		phoneNumber:  123456789,
		userPassword: "nicaiciakna",
	};
	
	return {
		getUserInfo: function() {
			return userInfo;
		}
	}
});