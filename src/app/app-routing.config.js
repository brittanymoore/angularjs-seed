const config = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', { url: '/' });
};

config.$inject = [ '$stateProvider', '$urlRouterProvider' ];

const routes = {
    config: config
};

export default routes;
