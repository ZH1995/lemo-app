angular.module('messageDetail-controller',[])
.controller('MessageDetailCtrl', ['$scope', '$stateParams', 'MessageDetailService', function($scope, $stateParams, MessageDetailService){
	MessageDetailService.getMessageDetail($stateParams.messageId).success(function (obj) {
		$scope.messageDetail = obj.data;
    }).error(function (obj) {
		alert("Network fail " + obj);
    })

}]);