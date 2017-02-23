angular.module('message-service', [])
.factory('MessageService', function($http){
	
	var messageList = {
		hotMessageList: [
			{
		    	messageId: 1000,
				messageTitle: "跑男团给袁姗姗庆生 唯独缺迪丽热巴",
				messagePic: "http://fun.youth.cn/gnzx/201702/W020170223306331962210.jpg",
		  	}, 
		  	{
		  		messageId: 1001,
				messageTitle: "挡不住的少女心！唐嫣玩自拍嘟嘴撩发狂卖萌",
				messagePic: "http://fun.youth.cn/gnzx/201702/W020170223264101763751.jpg",
		  	},
		  	{
		    	messageId: 1002,
				messageTitle: "《三生三世》杨幂一人分饰四角色 被赞表演有层次",
				messagePic: "http://www.people.com.cn/mediafile/pic/20170221/60/12778373725953283944.jpg",
		  	},
		  	{
		    	messageId: 1003,
				messageTitle: "景甜：目前还是单身狗，希望结婚生子别拖太晚",
				messagePic: "http://img1.utuku.china.com/650x0/ent/20170223/bd1cc1bb-f794-4f79-928b-5062b5975249.jpg",
		  	}],
		normalMessageList: [
			{
				messageId: 0,
				messageTitle: "行为失当被判20个月，港人唏嘘目送曾荫权收监",
				messagePic: "http://himg2.huanqiu.com/attachment2010/2017/0223/20170223083306425.jpg",
			},
			{
				messageId: 1,
				messageTitle: "北京傍晚迎来晚霞 漫天红色绚丽无比",
				messagePic: "http://www.huaxia.com/xw/tpxw/images/2017/02/23/1519391.jpg",	
			},
			{
				messageId: 2,
				messageTitle: "诗书画艺颂中国北京行暨组委会联盟签约仪式",
				messagePic: "http://n.sinaimg.cn/collect/transform/20170223/QAu1-fyarzzv3903667.png",	
			},
			{
				messageId: 3,
				messageTitle: "吴敦义炮轰某人不道德 叫阵要洪秀柱辞党主席",
				messagePic: "http://himg2.huanqiu.com/attachment2010/2017/0222/13/27/20170222012700244.jpg",	
			}]
		};
	return {
		getHotMessageList: function() {
			return messageList.hotMessageList;
		},
		getNormalMessageList: function() {
			return messageList.normalMessageList;
		}
	}
});