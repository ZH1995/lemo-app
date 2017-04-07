angular.module('register-controller',[])
.controller('RegisterCtrl',['$scope','$ionicPopup', '$timeout', '$state', 'RegisterService', function($scope, $ionicPopup, $timeout, $state, RegisterService) {
    $scope.formUser = {};

    $scope.doRegister = function(){

        if ($scope.formUser.password != $scope.formUser.rePassword) {
            $scope.showErrorMesPopup("密码不一致，请重新输入");
            return ;
        }
        RegisterService.register($scope.formUser).success(function(obj){
            if(obj.errno == 0){
                $scope.showSuccessMesPopup("正在注册，请稍后");
                $timeout(function() {
                    // TODO: 打算把用户ID存入Session
                    $scope.showErrorMesPopup("注册成功！");
                    $state.go("tab.message");
                }, 2000);
            }else{
                $scope.showErrorMesPopup("账号已被注册，请更换！");
            }
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


    //  验证成功后提示框
    $scope.showSuccessMesPopup = function(title) {
        var myPopup = $ionicPopup.show({
            title: '<b>'+title+'</b>',
            template: '<p style="text-align: center"><ion-spinner icon="android"></ion-spinner></p>'
        });
        $timeout(function() {
            myPopup.close(); // 2秒后关闭
        }, 2000);
    };
}]);