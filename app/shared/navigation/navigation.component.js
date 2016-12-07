(function () {
    'use strict';

    var module = angular.module("app.shared");

    module.component("navigation", {
        templateUrl: function(APP_CONFIG) {
            return APP_CONFIG.path + "/app/shared/navigation/navigation.view.html?ver=" + APP_CONFIG.version
        },
        bindings: {},
        controllerAs: "vm",
        controller: "NavigationController"
    });

})();