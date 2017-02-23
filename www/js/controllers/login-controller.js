angular.module('login-controller',[])
.controller('LoginCtrl', ['$scope', '$ionicPopup', '$timeout', '$state', 'LoginService', function($scope, $ionicPopup, $timeout, $state, LoginService){

	$scope.formUser = {};

	$scope.doLogin = function(){
		LoginService.login(this.formUser);
		$scope.showSuccessMesPopup("正在登录请稍后");
        var user = JSON.stringify(data);
        sessionStorage.setItem("user",user);
      // TODO: 服务端还没写，所以这里先注释掉，默认输入合法即跳转
      /*
        LoginService.login(this.formUser).success(function(data){
            if (data == null) {
                $scope.showErrorMesPopup("手机号或密码错误");
            } else {
                $scope.showSuccessMesPopup("正在登录请稍后");
                console.log(data);
                var user = JSON.stringify(data);
                sessionStorage.setItem("user",user);
            }
      });
	*/
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