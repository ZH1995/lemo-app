angular.module('message-controller',[])
.controller('MessageCtrl', ['$scope', '$timeout', '$ionicLoading', '$sce',
			'MessageService', 'MessageHotspotService',
			function($scope, $timeout, $ionicLoading, $sce, MessageService, MessageHotspotService){

	MessageHotspotService.getHotspotList().success(function (obj) {
	$scope.hotspotList = obj.data;
	console.log(obj.data);
	}).error(function (obj) {
		alert("Network fail " + obj);
	});

	$scope.items = [];
	$scope.pagination = {
		pageSize: 10,
		currentPage: 0
	};
	
	$scope.isHaveMoreData = true;
	$scope.loadMore = function() {
		MessageService.getNormalMessageList({
			pageSize: $scope.pagination.pageSize,
			currentPage: $scope.pagination.currentPage++
		})
		.success(function(obj){
			if (obj.errno != 0 || obj.data.list.length == 0) {
                $scope.isHaveMoreData = false;
                return;
            }
			$scope.items = $scope.items.concat(obj.data.list);
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

}]);