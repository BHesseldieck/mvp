angular.module('THON.start', [])

.controller('StartCtrl', function (Data, resolveData) {
  var SCtrl = this;
  SCtrl.data = {technologies: resolveData};
  console.log(SCtrl.data);
});