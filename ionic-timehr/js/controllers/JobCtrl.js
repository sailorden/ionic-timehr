angular.module('kuwuya.JobCtrl', ['kuwuya.homeServer'])
.controller('JobCtrl', function($scope,$timeout,$ionicLoading,$ionicPopup,jobService) {
	$ionicLoading.show({
			template: "正在载入数据，请稍后..."
		});
   jobService.joblist().success(function (data,status,config) {
   		//console.log(config);
   		$scope.datas = data; //输出数组
   		$scope.dateNow = "id" //排序
   		if($scope.status ='200'){
   			$ionicLoading.hide();
   		}
   		
   }).error(function() {
   		$ionicLoading.hide();
   		$ionicPopup.alert({
			title: "警告",
			template: "网络连接状态不太好,请重新连接"
		})
   	});

})
.controller('joblistCtrl',function($scope,$location,$stateParams,jobService) {
  //console.log($location);
  var id = $stateParams.id;
  //console.log(id);
  jobService.job_id(id).success(function (data) {
  		//console.log(data);
  		$scope.jobShow = data;
  });
});