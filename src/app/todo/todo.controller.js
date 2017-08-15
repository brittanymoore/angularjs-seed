class ToDoController {

    constructor(ToDoService) {
        this.title = 'To-do List';
        this.ToDoService = ToDoService;
        this.name = '';
        this.tasks = [];
    }

    $onInit() {
        this.getTasks();
    }

    getTasks() {
        this.ToDoService.getTasks()
            .then((data) => {
                this.tasks = data;
            });
    }

    addTask() {

        this.ToDoService.addTask(this.name)
            .then((data) => {
                const newTask = data;
                this.tasks.push(newTask);
            });

        this.name = '';
        this.message = '';
    }

}

ToDoController.$inject = [ 'ToDoService' ];

export default ToDoController;
