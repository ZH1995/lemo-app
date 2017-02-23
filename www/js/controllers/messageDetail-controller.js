angular.module('messageDetail-controller',[])
.controller('MessageDetailCtrl', ['$scope', '$stateParams', 'MessageDetailService', function($scope, $stateParams, MessageDetailService){
	$scope.messageDetail = MessageDetailService.getMessageDetail($stateParams.messageId);
}]);