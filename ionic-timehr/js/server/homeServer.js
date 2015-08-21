angular.module('kuwuya.homeServer', [])
.service('jobService',function ($http,$rootScope,$log,$filter) {
	this.joblist = function () {
		var URL = "http://192.168.7.157/co/index.php/Home/Index/test_json";
		return $http.get(URL,{cache:true});
	}
	this.job_id = function (id) {
		var URL = "http://192.168.7.157/co/index.php/Home/Index/json_id/id/"+id;
		return $http.get(URL,{cache:true});
	}
});