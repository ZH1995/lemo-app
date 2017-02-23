angular.module('media-service', [])
.factory('MediaService', function($http){
	
	var mediaList = [
		{
			url:       "http://v.qq.com/iframe/player.html?vid=k03249wonni&width=400&height=200&auto=0",
			mediaTitle: "为你读诗第1156期：黄磊《论孩子》",
		},
		{
			url:       "http://v.qq.com/iframe/player.html?vid=t0324end2ks&amp;width=400&amp;height=200&amp;auto=0",
			mediaTitle: "为你读诗第1155期：诗人之恋",
		},
		{
			url:       "http://v.qq.com/iframe/player.html?vid=i03233wns3x&amp;width=400&amp;height=200&amp;auto=0",
			mediaTitle: "为你读诗第1054期：《伊萨卡》",
		},
		{
			url:       "http://v.qq.com/iframe/player.html?vid=a0323lwoknj&amp;width=400&amp;height=200&amp;auto=0",
			mediaTitle: "为你读诗：《如此多星座》",
		},
		{
			url:       "http://v.qq.com/iframe/player.html?vid=u00223v4ic0&amp;width=400&amp;height=200&amp;auto=0",
			mediaTitle: "见字如面第7期：硬汉张涵予变欧阳修读信火力全开",	
		},
		{
			url:       "http://v.qq.com/iframe/player.html?vid=f00220ttfno&amp;width=400&amp;height=200&amp;auto=0",
			mediaTitle: "见字如面第6期：民国一级上将临战前的遗书读哭王耀庆",		
		},
		{
			url:       "http://v.qq.com/iframe/player.html?vid=m0022yt2swm&amp;width=400&amp;height=200&amp;auto=0",
			mediaTitle: "见字如面第5期：王耀庆变末代皇帝溥仪 给斯大林写信求斯大林收留",	
		}
	];
	
	return {
		getMediaList: function() {
			return mediaList;
		}
	}
});