const config = ($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', { url: '/' });

    // no hashbang in urls
    $locationProvider.html5Mode(true);
};

config.$inject = [ '$stateProvider', '$urlRouterProvider', '$locationProvider' ];

const routes = {
    config: config
};

export default routes;
