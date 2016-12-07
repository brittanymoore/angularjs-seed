angular.module("app").config(function ($routeProvider, $locationProvider, APP_CONFIG) {

    $routeProvider
        .when("/", {
            templateUrl: APP_CONFIG.path + "/app/components/index/index.view.html?ver=" + APP_CONFIG.version,
            controller: "IndexController",
            controllerAs: "vm"
        });

});