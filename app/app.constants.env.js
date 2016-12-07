(function () {
    "use strict";

    // Contains environment-specific variables that can be updated in-place.

    angular.module("app.constants")
        .constant("APP_CONFIG", {
            path: "",
            version: "0.0.0"
        });

})();