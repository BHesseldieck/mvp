angular.module('THON.ranking', [])

.controller('RankingCtrl', function ($state, Data, resolveData) {
  var RCtrl = this;
  RCtrl.data = {"languages": [], "backend": []};
  resolveData.forEach(function(tech){
  	RCtrl.data[tech.category].push(tech);
  });
  console.log(RCtrl.data);

});