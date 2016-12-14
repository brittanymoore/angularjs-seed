import homeTemplate from './home/home.html';
import toDoTemplate from './todo/todo.html';
import testformTemplate from './testform/testform.html';

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
            })
            .state('testform', {
                url: '/testform',
                template: testformTemplate,
                controller: 'TestFormController',
                controllerAs: 'vm'
            });
    }
};

export default routes;