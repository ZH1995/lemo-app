angular.module('modifyPassword-service', [])
.factory('ModifyPasswordService', function($http){
	
	var userInfo = {
		//messageId: 1000,
		userName:     "夏天",
		phoneNumber:  123456789,
		userPassword: "nicaiciakna",
	};
	
	return {
		modifyPassword: function(modifyPasswordParams) {
			//modifyPasswordParams.phoneNumber
			//modifyPasswordParams.password
			return userInfo;
		}
	}
});