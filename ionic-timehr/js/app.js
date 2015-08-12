angular.module('kuwuya', ['ionic'])
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
    .state('jobmenu', {
      url: "/jobs",
      abstract: true,
      templateUrl: "templates/job-menu.html"
    })
    .state('jobmenu.job', {
      url: "/job",
      views: {
        'menuJob' :{
          templateUrl: "./job.html"
        }
      }
    })
    .state('jobmenu.joblist',{
      url:"/joblist",
      views: {
        'menuJob' :{
          templateUrl: "./joblist.html"
        }
      }
    })
    .state('eventmenu.lietou', {
      url: "/lietou",
      views: {
        'menuContent' :{
          templateUrl: "./lietou.html"
          //controller: "CheckinCtrl"
        }
      }
    })
    .state('eventmenu.css_utility',{   //css 文件夹
      url:"/css/utility",
      views:{
        'menuContent' :{
          templateUrl: "./css/utility.html"
        }
      }
    })
    .state('eventmenu.js_ion-header-bar',{   //js 文件夹
      url:"/js/ion-header-bar",
      views:{
        'menuContent' :{
          templateUrl: "./js/ion-header-bar.html"
        }
      }
    })
  
 $urlRouterProvider.otherwise("/event/home");
})

.controller('MainCtrl', function($scope, $ionicHistory, $ionicScrollDelegate, $rootScope) {
  $scope.warn_right = function () {
        //history.back();
        $ionicHistory.goBack();
    };
  $scope.nav_header = '腾驹达官网';

  $rootScope.slideHeader = false;
  $rootScope.slideHeaderPrevious = 0;
})

.directive('scrollWatch', function($rootScope) {
  return function(scope, elem, attr) {
    var start = 0;
    var threshold = 150;
    
    elem.bind('scroll', function(e) {
      if(e.detail.scrollTop - start > threshold) {
        $rootScope.slideHeader = true;
      } else {
        $rootScope.slideHeader = false;
      }
      
      if ($rootScope.slideHeaderPrevious >= e.detail.scrollTop - start) {
        $rootScope.slideHeader = false;
      }
      
      $rootScope.slideHeaderPrevious = e.detail.scrollTop - start;
      $rootScope.$apply();
    });
  };
});

