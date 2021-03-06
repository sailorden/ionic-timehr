angular.module('kuwuya', ['ionic','kuwuya.JobCtrl','kuwuya.namecardServer'])
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-back');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-back');  

  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');

  //$ionicConfigProvider.views.swipeBackEnabled(false); //禁止侧滑后退事件
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  /*
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
*/
    .state('jobmenu', {
      url: "/jobs",
      abstract: true,
      templateUrl: "templates/job-menu.html"
    })
    .state('jobmenu.home', {
      url: "/home",
      views: {
        'menuJob' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('jobmenu.namecard', {
      url: "/namecard",
      views: {
        'menuJob' :{
          templateUrl: "./templates/namecard.html",
          //controller:"namecardCtrl_timeout"  //自动显示导航
        }
      }
    })
    .state('jobmenu.namecard_list', {
      url: "/namecard_list",
      views: {
        'menuJob' :{
          templateUrl: "./templates/namecard_list.html"
        }
      }
    })
    .state('jobmenu.job_list',{
      url:"/job_list/:id",
      views: {
        'menuJob' :{
          templateUrl: "./templates/job_list.html",
          controller:"joblistCtrl"
        }
      }
    })
    .state('jobmenu.login',{
      url:"/login",
      views: {
        'menuJob' :{
          templateUrl: "./templates/login.html"
        }
      }
    })
    .state('jobmenu.lietou', {  //待开发
      url: "/lietou",
      views: {
        'menuJob' :{
          templateUrl: "./templates/lietou.html"
          //controller: "CheckinCtrl"
        }
      }
    })
    
  
 $urlRouterProvider.otherwise("/jobs/home");
})
.controller('MainCtrl', function($scope,$timeout, $ionicHistory, $ionicScrollDelegate, $rootScope) {
  $scope.warn_right = function () {
        //history.back();
        $ionicHistory.goBack()
        $timeout(function () {
          $rootScope.slideHeader = false;
        },500);
    };
  $scope.nav_header = function () {
    $timeout(function () {
      $rootScope.slideHeader = false;
    },500);
  }

  $rootScope.slideHeader = false;
  $rootScope.slideHeaderPrevious = 0;
})
.directive('scrollWatch', function($rootScope) {
  return function(scope, elem, attr) {
    var start = 0;
    var threshold = 300;
    
    elem.bind('scroll', function(e) {

      if(e.detail.scrollTop - start > threshold) {
        $rootScope.slideHeader = true;
      } else {
        $rootScope.slideHeader = false;
      }
      /*
      if ($rootScope.slideHeaderPrevious >= e.detail.scrollTop - start) {
        $rootScope.slideHeader = false;
      }
      
      $rootScope.slideHeaderPrevious = e.detail.scrollTop - start;
      */
      $rootScope.$apply();
    });
  };
});



