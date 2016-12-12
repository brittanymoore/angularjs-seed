'use strict';

var angular = require('angular');

module.exports = angular.module('app.chat', [])
    .factory('ChatService', require('./chat.service'))
    .controller('ChatController', require('./chat.controller'));