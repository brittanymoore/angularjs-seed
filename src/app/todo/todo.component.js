import ToDoController from './todo.controller';

let ToDoComponent = {
    template: require('./todo.html'),
    controller: ToDoController,
    controllerAs: 'vm',
    bindings: { }
}

export default ToDoComponent;