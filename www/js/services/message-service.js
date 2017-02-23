angular.module('message-service', [])
.factory('MessageService', function($http){
	
	var messageList = {
		hotMessageList: [
			{
		    	messageId: 1000,
				messageTitle: "活动标题一",
				messagePic: "http://img1.imgtn.bdimg.com/it/u=1794894692,1423685501&fm=23&gp=0.jpg",
		  	}, 
		  	{
		  		messageId: 1001,
				messageTitle: "活动标题二",
				messagePic: "http://img3.imgtn.bdimg.com/it/u=4271053251,2424464488&fm=23&gp=0.jpg",
		  	},
		  	{
		    	messageId: 1002,
				messageTitle: "活动标题三",
				messagePic: "http://img1.imgtn.bdimg.com/it/u=3144465310,4114570573&fm=23&gp=0.jpg",
		  	},
		  	{
		    	messageId: 1003,
				messageTitle: "活动标题四",
				messagePic: "http://img4.imgtn.bdimg.com/it/u=1350614941,725003865&fm=23&gp=0.jpg",
		  	}],
		normalMessageList: [
			{
				messageId: 0,
				messageTitle: "文章标题一",
				messagePic: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3198933028,762759914&fm=21&gp=0.jpg",
			},
			{
				messageId: 1,
				messageTitle: "文章标题二",
				messagePic: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3757989299,1909885939&fm=21&gp=0.jpg",	
			},
			{
				messageId: 2,
				messageTitle: "文章标题三",
				messagePic: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3515048626,3498642106&fm=21&gp=0.jpg",	
			},
			{
				messageId: 3,
				messageTitle: "文章标题四",
				messagePic: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2577868465,257669897&fm=21&gp=0.jpg",	
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