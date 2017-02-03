import ToDoComponent from './todo.component';
import ToDoService from './todo.service';

const MODULE_NAME = 'appToDo';

angular.module(MODULE_NAME, [])
  .component('todo', ToDoComponent)
  .service('ToDoService', ToDoService);

export default MODULE_NAME;