/**
 * Created by lemo on 17-4-7.
 */
angular.module('commentList-controller',[])
.controller('CommentListCtrl', ['$scope', '$stateParams', '$ionicHistory', 'CommentListService', function($scope, $stateParams, $ionicHistory, CommentListService){

	$scope.goBack = function(){

		$ionicHistory.goBack();
	}
}]);