angular.module('kuwuya.JobCtrl', ['kuwuya.homeServer'])
.controller('JobCtrl', function($scope,jobFactory) {
	jobFactory.joblistFactory()
})
.controller('joblistCtrl',function($scope,$location,$stateParams,jobFactory,$log) {
  //console.log($location);
  var id = $stateParams.id;
  jobFactory.job_idFactory(id);
});