(function () {
    "use strict";

    angular
        .module("app.shared")
        .controller("NavigationController", NavigationController);

    NavigationController.$inject = ["$location", "APP_CONSTANTS"];
    function NavigationController($location, APP_CONSTANTS) {

        var vm = this;

        // properties
        vm.routes = APP_CONSTANTS.routes;

        //////////////////////////////////////

    }

})();