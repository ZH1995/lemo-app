angular.module('message-controller',[])
.controller('MessageCtrl', ['$scope', '$timeout', '$ionicLoading', 'MessageService', function($scope, $timeout, $ionicLoading, MessageService){
	$scope.hotMessageList    = MessageService.getHotMessageList();
	$scope.normalMessageList = MessageService.getNormalMessageList();
	
	/*
	$scope.items = [];
	$scope.pagination = {
		pageSize: 10,
		currentPage: 1
	};
	
	$scope.isHaveMoreData = true;
	$scope.loadMore = function() {
		$data.findAll("message", {
			pageSize: $scope.pageSize,
			currentPage: $scope.pagination.currentPage ++
		})
		.success(function(data){
			if (data == null) {
				$scope.isHaveMoreData = false;
				return;
			}
			$scope.items = $scope.items.concat(data);
		})
		.finally(function(){
			$timeout(function(){
				$scope.$broadcast("scroll.infiniteScrollComplete");
			}, 2000);
		});
	};

	$scope.$on("stateChangeSuccess", function(){
		$scope.loadMore();
	});
	*/
}]);