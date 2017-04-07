angular.module('login-controller',[])
.controller('LoginCtrl', ['$scope', '$ionicPopup', '$timeout', '$state', 'LoginService', function($scope, $ionicPopup, $timeout, $state, LoginService){

	$scope.formUser = {};

	$scope.doLogin = function(){
        LoginService.login(this.formUser).success(function (obj) {
            if (obj.errno != 0) {
                $scope.showErrorMesPopup("手机号或密码错误");
                return -1;
            }
            $scope.showSuccessMesPopup("正在登录请稍后");
            var uid = obj.data.uid;
            // TODO: 打算把用户ID存入Session
            //var user = JSON.stringify(data);
            //sessionStorage.setItem("user",user);
            console.log(uid);
        }).error(function (obj) {
            $scope.showErrorMesPopup("网络错误，请保持网络畅通");
        });
    };

	$scope.showErrorMesPopup = function(title) {
        var myPopup = $ionicPopup.show({
            title: '<b>'+title+'</b>'
        });
        $timeout(function() {
            myPopup.close(); // 2秒后关闭
        }, 1000);
    };

    $scope.showSuccessMesPopup = function(title) {
        var myPopup = $ionicPopup.show({
            title: '<b>'+title+'</b>',
            template: '<p style="text-align: center"><ion-spinner icon="android" class="spinner-positive"></ion-spinner></p>'
        });
        $timeout(function() {
            myPopup.close(); // 2秒后关闭
            $state.go("tab.message");
        }, 2000);
    };
}]);