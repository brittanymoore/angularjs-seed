(function () {
    "use strict";

    angular.module("app.constants", [])
    .constant("APP_CONSTANTS", {
        routes: [
            {
                name: "index",
                path: "#/",
                id: "route-index"
            },
            {
                name: "chat",
                path: "#/chat",
                id: "route-chat"
            }
        ]
    });

})();
