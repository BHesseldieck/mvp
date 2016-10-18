angular.module('THON.languages', [])

.controller('LanguagesCtrl', function (Data) {
	console.log(Data.getTechData());
  var LCtrl = this;
  LCtrl.data = {technologies: Data.getTechData().filter(function(item){ return item.category === 'frontend'})};
  console.log(LCtrl.data);
});