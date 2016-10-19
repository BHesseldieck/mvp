angular.module('THON', [
  'THON.factory',
  'THON.start',
  'THON.auth',
  'THON.languages',
  'THON.backend',
  'THON.ranking',
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
    templateUrl: '/ng_app/languages/languages.html',
  };

  var backendState = {
    name: 'backend',
    url: '/vote/backend',
    controller: 'BackendCtrl',
    controllerAs: 'BCtrl',
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

  var rankingState = {
    name: 'ranking',
    url: '/ranking',
    controller: 'RankingCtrl',
    controllerAs: 'RCtrl',
    templateUrl: '/ng_app/ranking/ranking.html',
    resolve: {
      resolveData: function(Data) {
        return Data.getAll();
      }
    }
  };


  $urlRouterProvider.otherwise('/start');

  $stateProvider.state(startState);
  $stateProvider.state(loginState);
  $stateProvider.state(signupState);
  $stateProvider.state(languagesState);
  $stateProvider.state(backendState);
  $stateProvider.state(dbState);
  $stateProvider.state(frontendState);
  $stateProvider.state(rankingState);
});

// .run(['$state', function ($state) { console.log('ui-router state changed') }])
