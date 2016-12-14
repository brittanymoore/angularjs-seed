import ToDoController from './todo.controller';
import ToDoService from './todo.service';

let todo = () => {
  return {
    template: require('./todo.html'),
    controller: 'ToDoController',
    controllerAs: 'vm'
  }
};

const MODULE_NAME = 'appToDo';

angular.module(MODULE_NAME, [])
  .directive('todo', todo)
  .controller('ToDoController', ToDoController)
  .service('ToDoService', ToDoService);

export default MODULE_NAME;