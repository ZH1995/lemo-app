angular.module('messageDetail-controller',[])
.controller('MessageDetailCtrl', ['$scope', '$stateParams', '$ionicHistory', 'MessageDetailService', function($scope, $stateParams, $ionicHistory, MessageDetailService){
	MessageDetailService.getMessageDetail($stateParams.messageId).success(function (obj) {
		$scope.messageDetail = obj.data;
    }).error(function (obj) {
		alert("Network fail " + obj);
    });

	$scope.goBack = function(){

		$ionicHistory.goBack();
	}
}]);