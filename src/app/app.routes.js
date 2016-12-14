import homeTemplate from './home/home.html';
import toDoTemplate from './todo/todo.html';

var routes = {
    config: function ($stateProvider, $urlRouterProvider) {
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
};

export default routes;