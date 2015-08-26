angular.module('kuwuya.homeServer', [])
.factory('jobFactory',function ($rootScope,$timeout,$ionicLoading,$ionicPopup,jobService) {
	return{
		joblistFactory:function() {
			
			$ionicLoading.show({
					template: "正在载入数据，请稍后...",
					duration:2000
				});
			
		    jobService.joblist().success(function (data,status,config) {
		   		//console.log(config);
		   		$rootScope.datas = data; //输出数组
		   		$rootScope.dateNow = "-id" //倒排序
		   		
		    }).error(function() {
		   		$ionicLoading.hide();
		   		$ionicPopup.alert({
					title: "警告",
					template: "网络连接状态不太好,请重新连接"
				})
		   	});
		   	$ionicLoading.hide(); //消失载入loading示意图
		},
		job_idFactory:function(id) {
			/*
			$ionicLoading.show({
					template: "正在载入数据，请稍后..."
				});
			*/
			$timeout(function () {
	          $rootScope.slideHeader = false;
	        },500);
		    jobService.job_id(id).success(function (data,status,config) {
		   		//console.log(config);
		   		$rootScope.jobShow = data; //输出数组
		   		/*
		   		if($rootScope.status ='200'){
		   			$ionicLoading.hide();
		   		}
		   		*/
		    }).error(function() {
		   		$ionicLoading.hide();
		   		$ionicPopup.alert({
					title: "警告",
					template: "网络连接状态不太好,请重新连接"
				})
		   	});

		}
	}

})
.service('jobService',function ($http,$log) {
	this.joblist = function () {
		var URL = "http://192.168.7.157/co/index.php/Home/Index/test_json";
		return $http.get(URL,{cache:true});
	},
	this.job_id = function (id) {
		var URL = "http://192.168.7.157/co/index.php/Home/Index/json_id/id/"+id;
		return $http.get(URL,{cache:true});
	}
});