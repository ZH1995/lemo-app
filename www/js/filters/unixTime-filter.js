/**
 * Created by lemo on 17-4-7.
 */
angular.module('unixTime-filter', [])
.filter('UnixTimeFilter', function(){
	return function(unixTime) {
		return new Date(parseInt(unixTime) * 1000).toLocaleString().replace(/:\d{1,2}$/, '');
	};
});