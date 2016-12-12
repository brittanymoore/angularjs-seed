'use strict';

var angular = require('angular');

module.exports = angular.module('app.home', [])
    .controller('HomeController', require('./home.controller'));