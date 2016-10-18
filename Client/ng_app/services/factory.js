angular.module('THON.factory', [])

.factory('Data', function ($http) {
  var techData;
  // Simple GET request example:
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/data'
    })
    .then(function successCallback(response) {
      techData = response.data;
      return response.data;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      return response;
    });
  };

  var addOne = function(urlObj) {
    return $http({
      method: 'POST',
      url: '/vote',
      data: JSON.stringify(urlObj)
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      return response;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      return response;
    });
  };

  var getTechData = function() {
    return techData;
  };

  return {
    getAll: getAll,
    addOne: addOne,
    getTechData: getTechData,
  };
})

.factory('Auth', function($http){
  var login = function (user) {
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    })
    .then(function (resp) {
      return resp;
    });
  };


  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/signup',
      data: user
    })
    .then(function(resp){
      return resp;
    });
  };


  return {
    login: login,
    signup: signup,
  };

});