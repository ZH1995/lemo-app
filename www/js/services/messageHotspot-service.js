angular.module('messageHotspot-service', [])
.factory('MessageHotspotService', function($http){
	return {
		getHotspotList: function() {
			return $http({
				method: "POST",
				url: "http://localhost:10101/message/hotspot",
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			});
		}
	}
});
