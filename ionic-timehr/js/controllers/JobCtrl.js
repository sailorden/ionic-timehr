angular.module('kuwuya.JobCtrl', ['kuwuya.homeServer'])
.controller('JobCtrl', function($scope,$timeout,jobService) {
   jobService.joblist().success(function (data,status,config) {
   		//console.log(config);
   		$scope.datas = data; //输出数组
   		$scope.dateNow = "id" //排序
   }).error(function() {
   		alert('URL无效 错误');
   	})
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