'use strict';

require('./home/index');
require('./chat/index');
require('./mock/index');

var app = angular.module('app', [
    'ui.router',
    'app.home',
    'app.chat'
])
// routes
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix(''); // eliminate ! in url paths

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home/home.html'),
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .state('chat', {
            url: '/chat',
            template: require('./chat/chat.html'),
            controller: 'ChatController',
            controllerAs: 'vm'
        }); 
        
});

// use mock in development environment
if (process.env.ENV == 'development') {
    app.requires.push("app.mock");
}

module.exports = app;