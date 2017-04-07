angular.module('message-service', [])
.factory('MessageService', function($http){
	return {
		getNormalMessageList: function(pageParam) {
			var request_data = new Object();
			request_data.pageSize = pageParam.pageSize;
			request_data.currentPage = pageParam.currentPage;
			return $http({
				method: "POST",
				url: "http://localhost:10101/message/list",
				data: JSON.stringify(request_data),
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			});
		}
	}
});