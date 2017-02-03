let config = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        })
        .state('todo', {
            url: '/todo',
            component: 'todo'
        });
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

let routes = {
    config: config
};

export default routes;