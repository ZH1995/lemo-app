angular.module('messageDetail-service', [])
.factory('MessageDetailService', function($http){
	return {
		getMessageDetail: function(messageId) {
			var request_data = new Object();
			request_data.message_id = messageId;
			return $http({
				method: "POST",
				url: "http://localhost:10101/message/content",
				data: JSON.stringify(request_data),
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			});
		}
	}
});