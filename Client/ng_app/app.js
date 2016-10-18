angular.module('THON', [
  'THON.factory',
  'THON.start',
  'THON.auth',
  'THON.languages',
  'ui.router',
])


.config(function($stateProvider, $urlRouterProvider) {

  var startState = {
    name: 'start',
    url: '/start',
    controller: 'StartCtrl',
    controllerAs: 'SCtrl',
    templateUrl: '/ng_app/start/start.html',
    resolve: {
      resolveData: function(Data) {
        return Data.getAll();
      }
    }
  };

  var loginState = {
    name: 'login',
    url: '/login',
    controller: 'AuthCtrl',
    controllerAs: 'ACtrl',
    templateUrl: '/ng_app/auth/login.html',
  };

  var signupState = {
    name: 'signup',
    url: '/signup',
    controller: 'AuthCtrl',
    controllerAs: 'ACtrl',
    templateUrl: '/ng_app/auth/signup.html',
  };

  var languagesState = {
    name: 'languages',
    url: '/vote/languages',
    controller: 'LanguagesCtrl',
    controllerAs: 'LCtrl',
    templateUrl: '/ng_app/languages/languages.html'
  };

  var backendState = {
    name: 'backend',
    url: '/vote/backend',
    controller: 'BackendCtrl',
    templateUrl: '/ng_app/backend/backend.html'
  };

  var dbState = {
    name: 'db',
    url: '/vote/db',
    controller: 'DbCtrl',
    templateUrl: '/ng_app/db/db.html'
  };

  var frontendState = {
    name: 'frontend',
    url: '/vote/frontend',
    controller: 'FrontendCtrl',
    templateUrl: '/ng_app/frontend/frontend.html'
  };


  $urlRouterProvider.otherwise('/start');

  $stateProvider.state(startState);
  $stateProvider.state(loginState);
  $stateProvider.state(signupState);
  $stateProvider.state(languagesState);
  $stateProvider.state(backendState);
  $stateProvider.state(dbState);
  $stateProvider.state(frontendState);
});

// .run(['$state', function ($state) { console.log('ui-router state changed') }])
