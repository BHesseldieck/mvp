angular.module('THON.backend', [])

.controller('BackendCtrl', function ($state, Data) {
  var BCtrl = this;
  BCtrl.data = {technologies: Data.getTechData().filter(function(item){ return item.category === 'backend'})};
  console.log(BCtrl.data);

  BCtrl.sendClick = function(tech){
  	Data.registerLike(tech).then(function(){
  		$state.go('ranking');
  	});
  };
});