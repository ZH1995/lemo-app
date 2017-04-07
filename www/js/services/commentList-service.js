/**
 * Created by lemo on 17-4-7.
 */
angular.module('commentList-service', [])
.factory('CommentListService', function($http){

	return {
		getCommentList: function(formUser) {
			return true;
		    /*
		    var request_data = new Object();
			request_data.username = formUser.phoneNumber;
			request_data.password = formUser.password;
			return $http({
				method: "POST",
				url: "http://localhost:10101/user/login",
				data: JSON.stringify(request_data),
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			});
			*/
		}
	}
});