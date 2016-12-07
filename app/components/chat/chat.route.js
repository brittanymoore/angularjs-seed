angular.module("app").config(function ($routeProvider, $locationProvider, APP_CONFIG) {

    $routeProvider
        .when("/chat", {
            templateUrl: APP_CONFIG.path + "/app/components/chat/chat.view.html?ver=" + APP_CONFIG.version,
            controller: "ChatController",
            controllerAs: "vm"
        });

});