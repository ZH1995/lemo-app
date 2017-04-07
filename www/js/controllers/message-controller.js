angular.module('message-controller',[])
.controller('MessageCtrl', ['$scope', '$timeout', '$ionicLoading', '$sce', '$ionicSlideBoxDelegate',
			'MessageService', 'MessageHotspotService',
			function($scope, $timeout, $ionicLoading, $sce, $ionicSlideBoxDelegate, MessageService, MessageHotspotService){

	$scope.hotspotList = [];
	$scope.items = [];
	$scope.pagination = {
		pageSize: 7,
		currentPage: 0
	};


	$scope.getHotMessage = function() {
		MessageHotspotService.getHotspotList().success(function (obj) {
            $scope.hotspotList = obj.data;
            console.log("getHotMessage");
        }).error(function (obj) {
            alert(obj);
        }).finally(function(){
        	$timeout(function(){
				$ionicSlideBoxDelegate.$getByHandle('slideimgs').update();
				$ionicSlideBoxDelegate.$getByHandle('slideimgs').loop(true);
			} , 500);
		});
    };

	$scope.doRefresh = function () {
		$scope.items = [];
		$scope.pagination = {
			pageSize: 7,
			currentPage: 0
		};
		$scope.getHotMessage();
		$scope.loadMore();
    };

	$scope.isFirstLoadHot = true;
	$scope.isHaveMoreData = true;
	$scope.loadMore = function() {
		if ($scope.isFirstLoadHot == true) {
			$scope.getHotMessage();
			$scope.isFirstLoadHot = false;
			console.log("loadMore");
		}
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
				$scope.$broadcast('scroll.refreshComplete');
			}, 2000);
		});
	};

	$scope.$on("stateChangeSuccess", function(){
		$scope.loadMore();
	});

}]);