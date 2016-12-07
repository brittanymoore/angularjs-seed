(function () {
    "use strict";

    // define app module and define app-level dependencies
    angular.module("app")

        .config(function ($routeProvider, $locationProvider) {

            // route definitions
            $routeProvider.otherwise({ redirectTo: "#/" });

        });

})();
