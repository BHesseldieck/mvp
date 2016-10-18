angular.module('THON.auth', [])

.controller('AuthCtrl', function ($window, $state, Auth) {
  var ACtrl = this;
  ACtrl.user = {};

  console.log('ACtrl: ', ACtrl.user );

  ACtrl.login = function () {
    Auth.login(ACtrl.user)
      .then(function (result) {
       	console.log('loggedin: ', result);
       	$state.go('start');
      })
  };

  ACtrl.signup = function() {
  	Auth.signup(ACtrl.user)
  	 .then(function(result){
  	 	console.log('signed up: ', result);
  	 	$state.go('start');
  	 })
  }


});