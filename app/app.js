(function () {
    "use strict";

    // define app module and define app-level dependencies
    angular.module("app", [
        // angular
        "ngRoute",
        // components
        "app.index",
        "app.chat",
        // core
        "app.constants",
        // shared
        "app.shared"
    ]);

})();
