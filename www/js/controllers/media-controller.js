angular.module('media-controller',[])
.controller('MediaCtrl', ['$scope', '$timeout', '$ionicLoading', 'MediaService', '$sce', function($scope,  $timeout, $ionicLoading, MediaService, $sce){
	
	$scope.mediaList = MediaService.getMediaList();
	for (var i = 0; i < $scope.mediaList.length; i ++) {
		$scope.mediaList[i].url = $sce.trustAsResourceUrl($scope.mediaList[i].url);
	}
}]);