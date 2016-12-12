'use strict';

require('./vendor.js')();
var appModule = require('./app/app');

angular.element(document).ready(function () {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});