angular.module('THON.languages', [])

.controller('LanguagesCtrl', function ($state, Data) {
	console.log(Data.getTechData());
  var LCtrl = this;
  LCtrl.data = {technologies: Data.getTechData().filter(function(item){ return item.category === 'languages'})};
  console.log(LCtrl.data);

  LCtrl.sendClick = function(tech){
  	Data.registerLike(tech).then(function(){
  		$state.go('backend');
  	});
  };
});