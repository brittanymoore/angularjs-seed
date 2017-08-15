import ToDoController from './todo.controller';

const ToDoComponent = {
    template: require('./todo.html'),
    controller: ToDoController,
    controllerAs: 'vm',
    bindings: { }
};

export default ToDoComponent;
