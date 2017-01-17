import homeTemplate from './home/home.html';
import toDoTemplate from './todo/todo.html';

let config = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/',
            template: homeTemplate,
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .state('todo', {
            url: '/todo',
            template: toDoTemplate,
            controller: 'ToDoController',
            controllerAs: 'vm'
        });
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

let routes = {
    config: config
};

export default routes;